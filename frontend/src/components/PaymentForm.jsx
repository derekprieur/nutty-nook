import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onStepChange }) => {
    const stripe = useStripe();
    const elements = useElements();

    const fetchClientSecret = async () => {
        const response = await fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                amount: 1000,
                currency: 'usd'
            })
        });
        const data = await response.json();
        console.log('Response data:', data);
        console.log('Client secret:', data.client_secret);
        return data.client_secret;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const clientSecret = await fetchClientSecret();
        console.log('Client secret fetched:', clientSecret);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            console.error(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Payment succeeded');
                onStepChange(2);
            } else {
                console.log('Payment status:', result.paymentIntent.status);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3 mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
                    Credit or Debit Card
                </label>
                <div className="bg-gray-100 p-2 rounded">
                    <CardElement className="w-full p-2" />
                </div>
            </div>
            <button
                type="submit"
                disabled={!stripe}
                className="bg-medium-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                Pay
            </button>
        </form>
    );
};

export default PaymentForm;

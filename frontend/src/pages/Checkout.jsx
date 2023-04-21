import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

import { ShippingForm, PaymentForm, OrderReview, OrderConfirmation } from '../components';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const userDetails = useSelector((state) => state.user.userDetails);
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    const [step, setStep] = useState(0);

    const orderDetails = {
        items: cartItems,
        shippingAddress: {
            name: 'John Doe',
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'USA',
        },
        totalPrice: cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ),
    };


    const handleStepChange = (newStep) => {
        setStep(newStep);
    };


    return (
        <div className="checkout-container h-screen">
            {step === 0 && <ShippingForm onStepChange={handleStepChange} />}
            {step === 1 && (
                <Elements stripe={stripePromise}>
                    <PaymentForm onStepChange={handleStepChange} />
                </Elements>
            )}
            {step === 2 && <OrderReview orderDetails={orderDetails} onStepChange={handleStepChange} userId={userDetails._id} />}
            {step === 3 && <OrderConfirmation />}
        </div>
    );

}

export default Checkout
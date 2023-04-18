import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { ShippingForm, PaymentForm, OrderReview } from '../components';


const Checkout = () => {
    const stripePromise = loadStripe("pk_live_51LYBY7Dp5GduYfsVaW4HqTKdTW82OuN3aCLuQH4gE3N9qqtxViniYKBkKu2k9xygkg3hphdpq4ZTbVbp2srwnlVp00dckK1vcJ");
    const [step, setStep] = useState(0);

    const handleStepChange = (newStep) => {
        setStep(newStep);
    };


    return (
        <div className="checkout-container">
            {step === 0 && <ShippingForm onStepChange={handleStepChange} />}
            {step === 1 && (
                <Elements stripe={stripePromise}>
                    <PaymentForm onStepChange={handleStepChange} />
                </Elements>
            )}
            {step === 2 && <OrderReview onStepChange={handleStepChange} />}
        </div>
    );

}

export default Checkout
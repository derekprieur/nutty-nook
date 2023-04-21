import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPrompt = () => {
    const navigate = useNavigate();
    const [isGuest, setIsGuest] = useState(false);

    const handleGuestCheckout = () => {
        setIsGuest(true);
        navigate('/checkout');
    };

    const handleSignIn = () => {
        navigate('/login', { state: { redirectToCheckout: true } });

    };

    return (
        <div className="checkout-prompt-container h-screen flex flex-col items-center justify-center px-4">
            <h2 className="text-2xl font-bold mb-6 text-dark-brown text-center">Continue as a guest or sign in</h2>
            <button
                className="bg-medium-brown text-white rounded-lg px-6 py-2 mt-4 mb-4"
                onClick={handleGuestCheckout}
            >
                Guest Checkout
            </button>
            <button
                className="bg-medium-brown text-white rounded-lg px-6 py-2 mt-4"
                onClick={handleSignIn}
            >
                Sign In
            </button>
        </div>
    );
};

export default CheckoutPrompt;

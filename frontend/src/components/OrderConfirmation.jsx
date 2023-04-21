import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearCart } from '../redux/cartSlice';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, []);

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='flex flex-col justify-center items-center p-4 space-y-6'>
            <img src={'/happy-squirrel.png'} alt="Happy Squirrel" className="w-full max-w-xl max-h-[450px] object-cover mb-6 rounded-xl" />
            <h2 className='text-2xl font-bold text-dark-brown'>Order Confirmation</h2>
            <p className='text-lg font-semibold text-dark-brown'>Thank you for your order!</p>
            <p className='text-center text-medium-gray'>Your order has been successfully placed and is being processed! 🌰</p>
            <button
                onClick={handleBackToHome}
                className="bg-medium-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Back to Home
            </button>
        </div>
    );
};

export default OrderConfirmation;

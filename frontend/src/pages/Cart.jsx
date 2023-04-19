import React, { useState, useEffect } from 'react';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFromCart, updateCartItem } from '../redux/cartSlice';

const CartPage = () => {
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

    useEffect(() => {
        const calculatedTotal = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        setTotal(calculatedTotal);
    }, [cartItems]);

    const handleUpdateCartItem = (productId, newQuantity) => {
        if (newQuantity >= 1) {
            dispatch(updateCartItem({ productId, newQuantity }));
        }
    };

    const handleRemoveCartItem = (productId) => {
        dispatch(removeFromCart(productId));
    };


    return (
        <div className="p-8 max-w-7xl mx-auto h-screen">
            <h2 className="text-2xl font-bold mb-6 text-dark-brown">Your Cart</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                {cartItems.length === 0 ? (
                    <p className='text-dark-brown'>Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col">
                        <div className="hidden md:flex md:mb-4 text-dark-brown font-bold">
                            <div className="w-1/4">Product</div>
                            <div className="w-1/4">Quantity</div>
                            <div className="w-1/4">Price</div>
                            <div className="w-1/4"></div>
                        </div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row items-center text-dark-brown mb-4">
                                <div className="w-full md:w-1/4 mb-2 md:mb-0 flex items-center">
                                    <img src={item.images[0]} alt={item.name} className="w-12 h-12 mr-2 object-cover" />
                                    {item.name}
                                </div>
                                <div className="w-full md:w-1/4 flex items-center mb-2 md:mb-0">
                                    <FaMinus
                                        className="cursor-pointer"
                                        onClick={() => handleUpdateCartItem(item.id, item.quantity - 1)}
                                    />
                                    <span className="mx-2">{item.quantity}</span>
                                    <FaPlus
                                        className="cursor-pointer"
                                        onClick={() => handleUpdateCartItem(item.id, item.quantity + 1)}
                                    />
                                </div>
                                <div className="w-full md:w-1/4 flex items-center mb-2 md:mb-0">
                                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                <div className="w-full md:w-1/4 flex items-center">
                                    <FaTimes
                                        className="cursor-pointer text-red-500 ml-2"
                                        onClick={() => handleRemoveCartItem(item.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-end mt-6">
                <div className="text-right">
                    <p className='text-dark-brown'>Total: ${total.toFixed(2)}</p>
                    <Link to='/checkout'>
                        <button
                            className="bg-medium-brown text-white rounded-lg px-6 py-2 mt-4"
                            disabled={cartItems.length === 0}
                        >
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

CartPage.defaultProps = {
    cartItems: [],
}

export default CartPage;

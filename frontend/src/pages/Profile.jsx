import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/userSlice";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";

const Profile = () => {
    const [orderHistory, setOrderHistory] = useState([])
    const user = useSelector((state) => state.user.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user || !user._id) {
                return
            }
            try {
                const response = await fetch(`${import.meta.env.VITE_PROD_BACKEND_URL}/orders/user/${user._id}`);
                const orders = await response.json();
                setOrderHistory(orders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, [user]);

    return (
        <div className="container mx-auto mt-10 px-4 h-screen">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-semibold mb-6">Profile</h1>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name:</label>
                            <p id="name" className="border-2 border-light-gray w-full py-2 px-4 rounded">
                                John Doe
                            </p>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email:</label>
                            <p id="email" className="border-2 border-light-gray w-full py-2 px-4 rounded">
                                user@example.com
                            </p>
                        </div>
                        <button
                            className="bg-medium-brown hover:bg-dark-brown text-white py-2 px-4 rounded focus:outline-none"
                        >
                            Edit Profile
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-xl font-semibold mb-4 mt-4 md:mt-0">Order History</h2>
                        <ul className="border-2 border-light-gray rounded py-2">
                            {orderHistory?.map((order) => (
                                <li
                                    key={order.id}
                                    className="flex justify-between px-4 py-2 border-b-2 border-light-gray last:border-0 flex-col"
                                >
                                    <span>Order #{order.orderNumber}</span>
                                    <span>Date: {formatDate(order.orderDate)}</span>
                                    <span>Total: ${order.totalPrice.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <button
                        onClick={handleSignOut}
                        className="bg-medium-brown hover:bg-dark-brown text-white py-2 px-4 rounded focus:outline-none"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );

};

export default Profile;

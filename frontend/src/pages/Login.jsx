import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { login } from '../redux/userSlice';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'user@example.com' && password === 'password') {
            const userDetails = {
                id: 1,
                name: 'John Doe',
                email: 'user@example.com',
            };
            dispatch(login(userDetails));
            navigate('/profile');
        } else {
            console.log('Invalid email or password');
            toast.error('Invalid email or password');
        }
    };

    return (
        <div className="container mx-auto mt-10 max-w-md h-screen">
            <h1 className="text-2xl font-semibold mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-200 w-full py-2 px-4 rounded focus:outline-none focus:border-medium-brown"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-gray-200 w-full py-2 px-4 rounded focus:outline-none focus:border-medium-brown"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-medium-brown hover:bg-dark-brown text-white py-2 px-4 rounded focus:outline-none"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

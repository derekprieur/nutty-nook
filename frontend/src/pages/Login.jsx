import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

import { login } from '../redux/userSlice';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:5000/users/login', {
                email,
                password,
            });

            dispatch(login(data.user));
            localStorage.setItem('token', data.token);
            if (location.state && location.state.redirectToCheckout) {
                navigate('/checkout');
            } else {
                navigate('/profile');
            }
        } catch (error) {
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
                        className="border-2 border-light-gray w-full py-2 px-4 rounded focus:outline-none focus:border-medium-brown"
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
                        className="border-2 border-light-gray w-full py-2 px-4 rounded focus:outline-none focus:border-medium-brown"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-medium-brown hover:bg-dark-brown text-white py-2 px-4 rounded focus:outline-none"
                >
                    Login
                </button>
            </form>
            <p className="mt-4">
                Don't have an account?{' '}
                <Link to="/signup" className="text-medium-brown hover:text-dark-brown">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;

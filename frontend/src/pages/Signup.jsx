import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

import { login } from '../redux/userSlice';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                const { data } = await axios.post('https://nutty-nook.onrender.com/users/signup', {
                    name,
                    email,
                    password,
                });
                dispatch(login(data.user));
                navigate('/profile');
            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            toast.error('Passwords do not match');
        }
    };

    return (
        <div className="container mx-auto mt-10 max-w-md h-screen">
            <h1 className="text-2xl font-semibold mb-6">Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-light-gray w-full py-2 px-4 rounded focus:outline-none focus:border-medium-brown"
                        required
                    />
                </div>
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
                        required
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
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirm-password" className="block mb-2">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border-2 border-light-gray w-full py-2 px-4 rounded focus:outline-none focus:border-medium-brown"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-medium-brown hover:bg-dark-brown text-white py-2 px-4 rounded focus:outline-none"
                >
                    Signup
                </button>
            </form>
            <p className="mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-medium-brown hover:text-dark-brown">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Signup
import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-light-brown">
            <div>
                <div className="text-white font-bold hidden md:flex">Nutty Nook</div>
                <img src='/acorn.png' alt='acorn' className='w-6 h-6 inline-block' />
            </div>
            <div className="relative">
                <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search products"
                    className="rounded-full pl-8 pr-4 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
            </div>
            <div className="flex items-center space-x-4 text-white">
                <FaShoppingCart />
                <FaUser />
            </div>
        </header>
    );
};

export default Header;

import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

import { MobileMenu } from './'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-light-brown">
            <div>
                <div className="text-white font-bold hidden md:flex">Nutty Nook</div>
                <img src='/acorn.png' alt='acorn' className='w-6 h-6 inline-block cursor-pointer' />
            </div>
            <div className="relative">
                <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-medium-gray" />
                <input
                    type="text"
                    placeholder="Search nuts"
                    className="rounded-full pl-8 pr-4 py-1 bg-white text-medium-gray-gray focus:outline-none focus:ring-2 focus:ring-light-gray"
                />
            </div>
            <div className="md:flex items-center space-x-4 text-white hidden">
                <FaShoppingCart />
                <FaUser />
            </div>
            <div className='md:hidden'>
                <FaBars className='text-white text-lg cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        </header>
    );
};

export default Header;

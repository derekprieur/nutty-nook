import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaUserCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/searchSlice';

import { MobileMenu } from './'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const totalItems = cartItems.length;
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            dispatch(setSearchTerm(event.target.value));
            navigate('/products');
        }
    };

    const handleUserIconClick = () => {
        if (isLoggedIn) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="flex items-center justify-between px-4 py-2 bg-light-brown md:px-6 md:py-4">
            <Link to="/" className='flex gap-2'>
                <div className="text-white font-bold text-lg hidden md:flex">Nutty Nook</div>
                <img src='/acorn.png' alt='acorn' className='w-6 h-6 inline-block cursor-pointer md:w-8 md:h-8' />
            </Link>
            <div className="relative">
                <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-medium-gray md:left-3" />
                <input
                    type="text"
                    placeholder="Search nuts"
                    className="rounded-full pl-8 pr-4 py-1 bg-white text-medium-gray focus:outline-none focus:ring-2 focus:ring-light-gray md:pl-10 md:pr-5 md:py-2"
                    onKeyDown={handleSearch}
                />
            </div>
            <div className="md:flex items-center space-x-4 text-white hidden md:text-xl">
                <Link to="/products" className="text-white">
                    Products
                </Link>
                <Link to='/cart' className='relative'>
                    <FaShoppingCart />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-dark-orange text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <FaUser className={`${!isLoggedIn ? 'block' : 'hidden'} cursor-pointer`} onClick={handleUserIconClick} />
                <FaUserCheck className={`${isLoggedIn ? 'block' : 'hidden'} cursor-pointer`} onClick={handleUserIconClick} />
            </div>
            <div className='md:hidden'>
                <FaBars className='text-white text-lg cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        </header>
    );
};

export default Header;

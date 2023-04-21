import { motion } from 'framer-motion';
import { FaTimes, FaShoppingCart, FaUser, FaHome, FaBoxes, FaUserCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileMenu = ({ setIsOpen }) => {
    const cartItems = useSelector((state) => state.cart.items);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const user = useSelector((state) => state.user.userDetails);
    const navigate = useNavigate();
    const totalItems = cartItems.length
    console.log(user, 'user');
    const menuVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: '-100%', opacity: 0 },
    };

    const backdropVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    const handleUserIconClick = () => {
        if (isLoggedIn) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
        setIsOpen(false);
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
                initial="closed"
                animate="open"
                exit="closed"
                variants={backdropVariants}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
            />
            <motion.div
                className="fixed top-0 left-0 w-3/4 h-full bg-light-brown text-white p-4 z-20"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-start">
                    <div />
                    <FaTimes
                        className="text-white text-2xl cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                <ul className="mt-4">
                    <li className="flex items-center py-2 text-xl font-semibold">
                        <FaHome className="mr-3" />
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="flex items-center py-2 text-xl font-semibold">
                        <FaBoxes className="mr-3" />
                        <Link to="/products" onClick={() => setIsOpen(false)}>
                            Products
                        </Link>
                    </li>
                    <li className="flex items-center py-2 text-xl font-semibold relative">
                        <FaShoppingCart className="mr-3" />
                        <Link to='/cart' onClick={() => setIsOpen(false)}>
                            Cart
                        </Link>
                        {totalItems > 0 && (
                            <span className="absolute top-1 left-3 bg-dark-orange text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </li>
                    <li className="flex items-center py-2 text-xl font-semibold cursor-pointer" onClick={handleUserIconClick}>
                        <FaUser className={`${!isLoggedIn ? 'block' : 'hidden'} mr-3`} />
                        <FaUserCheck className={`${isLoggedIn ? 'block' : 'hidden'} mr-3`} />
                        {isLoggedIn ? `${user.name}` : 'Profile'}
                    </li>
                </ul>
            </motion.div>
        </>
    );
}

export default MobileMenu
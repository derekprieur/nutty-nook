import { motion } from 'framer-motion';
import { FaTimes, FaShoppingCart, FaUser, FaHome } from 'react-icons/fa';

const MobileMenu = ({ setIsOpen }) => {
    const menuVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: '-100%', opacity: 0 },
    };

    const backdropVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
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
                        Home
                    </li>
                    <li className="flex items-center py-2 text-xl font-semibold">
                        <FaShoppingCart className="mr-3" />
                        Cart
                    </li>
                    <li className="flex items-center py-2 text-xl font-semibold">
                        <FaUser className="mr-3" />
                        Profile
                    </li>
                </ul>
            </motion.div>
        </>
    );
}

export default MobileMenu
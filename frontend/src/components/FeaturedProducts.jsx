import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';

import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [displayCount, setDisplayCount] = useState(4);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.user.userDetails);
    const [products, setProducts] = useState([]);
    const [wishList, setWishList] = useState([])

    const fetchWishlist = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_PROD_BACKEND_URL}/users/wishlist/${user._id}`);
            const data = await response.json();
            setWishList(data.wishlist);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_PROD_BACKEND_URL}/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
        fetchWishlist();
    }, []);

    const handleShowMore = () => {
        setDisplayCount(displayCount + 4);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const findCartItem = (productId) => {
        return cartItems.find((item) => item.id === productId);
    };

    const handleAddToWishlist = async (product) => {
        if (Object.keys(user).length === 0) {
            toast.error('Please log in to add items to your wishlist');
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_PROD_BACKEND_URL}/users/wishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id,
                    productId: product._id,
                }),
            });

            const data = await response.json();
            fetchWishlist()
            if (!response.ok) {
                throw new Error(data.message || 'Error adding product');
            }

        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        }
    };

    const isInWishlist = (productId) => {
        if (!wishList) return false;
        return wishList.some((item) => item._id === productId);
    };

    const displayedProducts = products.slice(0, displayCount);

    return (
        <div className="w-full mx-auto max-w-sm md:max-w-7xl p-8">
            <Toaster />
            <h2 className="text-3xl font-bold text-dark-brown mb-4">Featured Products</h2>
            {!products.length ?
                <p className='text-dark-brown animate-pulse'>Loading...</p> :
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {displayedProducts.map(product => {
                        const cartItem = findCartItem(product.id);
                        return (
                            <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.images[0]} alt={product.name} className="w-24 h-24 mb-3 object-contain" />
                                </Link>
                                <Link to={`/products/${product.id}`}>
                                    <h3 className="text-lg font-bold text-dark-brown mb-2">{product.name}</h3>
                                </Link>
                                <p className="text-medium-brown mb-4">${product.price.toFixed(2)}</p>
                                {cartItem ? (
                                    <div className="flex items-center">
                                        <button className="bg-light-brown text-white px-2 py-1 rounded-l-lg hover:bg-medium-brown transition-colors duration-300" onClick={() => handleRemoveFromCart(product)}>
                                            -
                                        </button>
                                        <input type="number" min="1" value={cartItem.quantity} className="w-10 text-center border-t border-b border-medium-brown" readOnly />
                                        <button className="bg-light-brown text-white px-2 py-1 rounded-r-lg hover:bg-medium-brown transition-colors duration-300" onClick={() => handleAddToCart(product)}>
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button className="bg-light-brown text-white px-4 py-2 rounded-lg flex items-center hover:bg-medium-brown transition-colors duration-300" onClick={() => handleAddToCart(product)}>
                                        <FaShoppingCart className="mr-2" />
                                        Add to Cart
                                    </button>
                                )}
                                <button className="text-medium-brown hover:text-dark-brown transition-colors duration-300 flex justify-end w-full mt-4" onClick={() => handleAddToWishlist(product)}>
                                    {
                                        isInWishlist(product._id) ? (
                                            <AiFillHeart className='text-xl' />
                                        ) : (
                                            <AiOutlineHeart className='text-xl' />
                                        )
                                    }

                                </button>
                            </div>
                        )
                    })}
                </div>
            }
            {displayCount < products.length && (
                <div className="text-center mt-8">
                    <button
                        className="bg-light-brown text-white px-4 py-2 rounded-lg hover:bg-medium-brown transition-colors duration-300"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedProducts;

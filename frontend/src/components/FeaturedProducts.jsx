import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../redux/cartSlice';

const FeaturedProducts = () => {
    const [displayCount, setDisplayCount] = useState(4);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();
                setProducts(data);
                console.log(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
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

    const displayedProducts = products.slice(0, displayCount);

    return (
        <div className="w-full mx-auto max-w-sm md:max-w-7xl p-8">
            <h2 className="text-3xl font-bold text-dark-brown mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayedProducts.map(product => {
                    const cartItem = findCartItem(product.id);
                    return (
                        <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={product.images[0]} alt={product.name} className="w-24 h-24 mb-3 object-contain" />
                            <h3 className="text-lg font-bold text-dark-brown mb-2">{product.name}</h3>
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
                        </div>
                    )
                })}
            </div>
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

import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { products } from '../constants/products';

const FeaturedProducts = () => {
    const [displayCount, setDisplayCount] = useState(4);

    const handleShowMore = () => {
        setDisplayCount(displayCount + 4);
    };

    const displayedProducts = products.slice(0, displayCount);

    return (
        <div className="w-full mx-auto max-w-sm md:max-w-7xl p-8">
            <h2 className="text-3xl font-bold text-dark-brown mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayedProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img src={product.image} alt={product.name} className="w-24 h-24 mb-3 object-contain" />
                        <h3 className="text-lg font-bold text-dark-brown mb-2">{product.name}</h3>
                        <p className="text-medium-brown mb-4">${product.price.toFixed(2)}</p>
                        <button className="bg-light-brown text-white px-4 py-2 rounded-lg flex items-center hover:bg-medium-brown transition-colors duration-300">
                            <FaShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                    </div>
                ))}
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

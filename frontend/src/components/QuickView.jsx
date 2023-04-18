import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuickView = ({ product }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 group-hover:opacity-100 z-10">
            <Link to={`/products/${product.id}`}>
                <img src={product.images[0]} alt={product.name} className="w-24 h-24 mb-3 object-contain hover:scale-105 transition duration-300" />
            </Link>
            <h3 className="text-lg font-bold text-dark-brown mb-2">
                <Link to={`/products/${product.id}`} className="hover:text-medium-brown transition-colors duration-300">
                    {product.name}
                </Link>
            </h3>
            <p className="text-medium-brown mb-4">${product.price.toFixed(2)}</p>
            <button className="bg-light-brown text-white px-4 py-2 rounded-lg flex items-center hover:bg-medium-brown transition-colors duration-300">
                <FaShoppingCart className="mr-2 z-50" />
                Add to Cart
            </button>
        </div>
    );
};

export default QuickView;

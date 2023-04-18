import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../constants/products';
import { FaStar } from 'react-icons/fa';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id.toString() === id);

    const [activeImage, setActiveImage] = useState(product.images[0]);

    return (
        <div className="w-full mx-auto max-w-7xl p-8">
            <h1 className="text-3xl font-bold text-dark-brown mb-8">{product.name}</h1>
            <div className="md:flex">
                <div className="md:w-1/2 md:mr-8">
                    <img src={activeImage} alt={product.name} className="w-full h-auto mb-4" />
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} ${index}`}
                                className="w-16 h-16 cursor-pointer"
                                onClick={() => setActiveImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-dark-brown mb-2">${product.price.toFixed(2)}</h2>
                    <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5]?.map((star) => (
                            <FaStar
                                key={star}
                                className={star <= product.rating ? 'text-medium-brown' : 'text-light-gray'}
                            />
                        ))}
                    </div>
                    <p className="mb-4">{product.description}</p>
                    <button className="bg-light-brown text-white px-4 py-2 rounded-lg hover:bg-medium-brown transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="reviews mt-8">
                <h2 className="text-2xl font-bold text-dark-brown mb-4">Customer Reviews</h2>
                {product.reviews?.map((review, index) => (
                    <div key={index} className="mb-6">
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5]?.map((star) => (
                                <FaStar
                                    key={star}
                                    className={star <= review.rating ? 'text-medium-brown' : 'text-light-gray'}
                                />
                            ))}
                            <span className="ml-2 text-medium-brown">{review.name}</span>
                        </div>
                        <p className="text-sm text-medium-brown mb-1">{review.date}</p>
                        <p className="text-dark-gray">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;

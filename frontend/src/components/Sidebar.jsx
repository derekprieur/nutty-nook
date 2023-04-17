import React from 'react';
import { FilterCheckbox } from '../components';
import { FaStar } from 'react-icons/fa';

const Sidebar = ({ nutTypes, onNutTypeChange, priceRange, onPriceRangeChange, rating, onRatingChange, isOpen }) => {

    const handlePriceRangeChange = (e) => {
        onPriceRangeChange({ ...priceRange, [e.target.name]: Number(e.target.value) });
    };

    const handleRatingChange = (newRating) => {
        onRatingChange(newRating);
    };

    return (
        <aside className={`md:w-1/4 md:mr-8 mb-6 md:mb-0 p-4 md:p-6 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
            <section className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-dark-brown">Nut Types</h3>
                <ul className="bg-white rounded-lg p-4 shadow-md">
                    {nutTypes?.map((nutType) => (
                        <li key={nutType.id} className="mb-2">
                            <FilterCheckbox
                                label={nutType.name}
                                checked={nutType.checked}
                                onChange={(checked) => onNutTypeChange(nutType.id, checked)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-dark-brown">Price Range</h3>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex justify-between mb-2">
                        <input
                            type="number"
                            name="min"
                            className="w-1/2 border border-light-gray p-2 mr-2 text-dark-brown"
                            value={priceRange.min}
                            onChange={handlePriceRangeChange}
                            placeholder="Min"
                        />
                        <input
                            type="number"
                            name="max"
                            className="w-1/2 border border-light-gray p-2"
                            value={priceRange.max}
                            onChange={handlePriceRangeChange}
                            placeholder="Max"
                        />
                    </div>
                </div>
            </section>
            <section className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-dark-brown">Ratings</h3>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <div
                            key={star}
                            className={`flex items-center mb-2 cursor-pointer ${rating === star ? 'text-medium-brown' : 'text-light-gray'}`}
                            onClick={() => handleRatingChange(rating === star ? 0 : star)}
                        >
                            {[...Array(star)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;

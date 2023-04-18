import React, { useState } from 'react';

const ShippingForm = ({ onStepChange }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onStepChange(1);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-dark-brown">Shipping Information</h2>
            <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="address" className="mb-2">Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="city" className="mb-2">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="postalCode" className="mb-2">Postal Code:</label>
                <input
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="country" className="mb-2">Country:</label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg"
                />
            </div>
            <button type="submit" className="bg-medium-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded">
                Next
            </button>
        </form>
    );
};

export default ShippingForm;

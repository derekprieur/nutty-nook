import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="p-6 space-y-6 h-screen max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-dark-brown">Contact Us</h1>
            <p className="text-lg text-dark-brown">
                If you have any questions or comments, please don't hesitate to reach
                out to us. Fill out the form below, and we'll get back to you as soon
                as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="text-dark-brown">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 border border-light-gray rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-dark-brown">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 border border-light-gray rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-dark-brown">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 border border-light-gray rounded-md"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-dark-brown text-white px-4 py-2 rounded-md hover:bg-light-brown"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;

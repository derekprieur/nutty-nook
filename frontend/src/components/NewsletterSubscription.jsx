import { useState } from 'react';
import { toast } from 'react-hot-toast';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        toast.success('Welcome to the Nutty Nook family! 🐿️', { duration: 5000 });
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="w-full mx-auto max-w-7xl p-8">
            <h2 className="text-3xl font-bold text-dark-brown mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-medium-brown mb-6">Stay updated on new products and promotions!</p>
            <form onSubmit={handleSubmit} className="flex justify-center">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full sm:w-1/2 md:w-1/3 p-2 rounded-lg border border-dark-brown focus:outline-none focus:border-medium-brown"
                    required
                />
                <button
                    type="submit"
                    className="bg-light-brown text-white px-4 py-2 ml-2 rounded-lg hover:bg-medium-brown transition-colors duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsletterSubscription;

import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <img src={'/squirrel-error.png'} alt="Not Found" className="w-64 mb-4 rounded-xl" />
            <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
            <p className="mt-4 mb-8">It seems the page you're looking for doesn't exist.</p>
            <Link to="/" className="text-lg font-semibold text-medium-brown hover:text-light-brown">
                Return to Home
            </Link>
        </div>
    );
}

export default Error
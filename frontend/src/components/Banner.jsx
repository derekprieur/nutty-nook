import React from 'react';

import squirrels from '../assets/squirrels.png';

const Banner = () => {
    return (
        <div className="w-full mx-auto max-w-6xl p-4">
            <div className="text-center mb-4">
                <h1 className="text-4xl font-bold text-dark-brown mb-2">Welcome to Nutty Nook</h1>
                <h2 className="text-2xl text-medium-brown">Your Home for All Things Nutty</h2>
            </div>
            <div className="relative w-full overflow-hidden h-96">
                <img
                    src={squirrels}
                    alt="Squirrels and nuts banner"
                    className="w-full h-full object-cover rounded-3xl"
                />
            </div>
        </div>
    );
};

export default Banner;

import React from 'react';

import squirrels from '../assets/squirrels.png';

const Banner = () => {
    return (
        <div className="w-full mx-auto max-w-6xl p-4">
            <div className="text-center mb-4">
                <h1 className="text-4xl font-bold text-dark-brown mb-2">Welcome to Nutty Nook</h1>
                <h2 className="text-2xl text-medium-brown">A Squirrel's Home for All Things Nutty</h2>
            </div>
            <div className="relative w-full overflow-hidden">
                <img src={squirrels} alt="Squirrels and nuts banner" className="w-full h-full object-cover rounded-3xl max-h-44 md:max-h-60 lg:max-h-72" />
            </div>
        </div>
    );
};

export default Banner;

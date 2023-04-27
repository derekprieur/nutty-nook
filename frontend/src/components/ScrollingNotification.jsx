import React, { useEffect } from 'react';

const ScrollingNotification = () => {
    useEffect(() => {
        const scrollingElement = document.getElementById('scrolling-notification');
        const scrollWidth = scrollingElement.scrollWidth;
        const animationDuration = scrollWidth * 0.05;

        scrollingElement.style.animationDuration = `${animationDuration}s`;
    }, []);

    return (
        <div className="overflow-hidden pt-2">
            <div
                className="inline-block border rounded-full p-2 whitespace-nowrap font-bold text-medium-brown animate-scrolling"
                id="scrolling-notification"
            >
                🎉 Site-wide sale! Use code NUTS at checkout to get 20% off your entire order! 🎉
            </div>
        </div>
    );
};

export default ScrollingNotification;

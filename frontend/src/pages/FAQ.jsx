import React from 'react';

const FAQ = () => {
    return (
        <div className="px-4 py-6 space-y-6 h-screen ">
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>

            <div className="space-y-4">
                <details className="text-lg">
                    <summary className="font-bold cursor-pointer">Are all your nuts suitable for squirrels?</summary>
                    <p className="pl-4">Yes! We pride ourselves on providing a wide variety of high-quality nuts that are safe and enjoyable for squirrels.</p>
                </details>

                <details className="text-lg">
                    <summary className="font-bold cursor-pointer">Do you offer bulk discounts for large orders?</summary>
                    <p className="pl-4">Yes, we do offer bulk discounts for large orders. Please contact us for more information on pricing and availability.</p>
                </details>

                <details className="text-lg">
                    <summary className="font-bold cursor-pointer">Do you ship internationally?</summary>
                    <p className="pl-4">Currently, we only ship within the United States. We're working on expanding our shipping options to serve our international squirrel friends in the future.</p>
                </details>

                <details className="text-lg">
                    <summary className="font-bold cursor-pointer">What is your return policy?</summary>
                    <p className="pl-4">We want our squirrel customers to be satisfied with their purchases. If you're not happy with your order, please contact us within 14 days of receiving the product to discuss a return or exchange.</p>
                </details>

                <details className="text-lg">
                    <summary className="font-bold cursor-pointer">How long does it take for my order to arrive?</summary>
                    <p className="pl-4">Orders are typically processed within 1-2 business days, and shipping time varies depending on your location. Most orders are delivered within 3-5 business days after being shipped.</p>
                </details>

                <details className="text-lg">
                    <summary className="font-bold cursor-pointer">Do you have a physical store location?</summary>
                    <p className="pl-4">Currently, we operate exclusively online. We're always exploring new opportunities, so stay tuned for any updates about a potential physical store location.</p>
                </details>
            </div>
        </div>
    );
};

export default FAQ;

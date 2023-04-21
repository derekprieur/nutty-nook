import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), { apiVersion: '2020-08-27' });

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency
        });

        res.status(201).json({
            success: true,
            client_secret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export { createPaymentIntent };

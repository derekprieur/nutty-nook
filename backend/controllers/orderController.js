import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
    try {
        const orderCount = await Order.countDocuments();
        const orderNumber = orderCount + 1;

        const orderDate = new Date();

        const newOrder = new Order({
            ...req.body,
            orderNumber,
            orderDate
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order: ' + error.message });
    }
};

export const getOrdersByUserId = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders: ' + error.message });
    }
};

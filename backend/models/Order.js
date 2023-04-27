import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    shippingAddress: {
        name: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
    },
    items: [
        {
            name: String,
            price: Number,
        },
    ],
    totalPrice: Number,
    orderNumber: {
        type: Number,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;

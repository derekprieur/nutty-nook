import axios from 'axios';

const OrderReview = ({ orderDetails, onStepChange, userId }) => {
    const { shippingAddress, items, totalPrice } = orderDetails;

    const handleConfirmOrder = async () => {
        try {
            const response = await axios.post('http://localhost:5000/orders/create', { ...orderDetails, userId });
            console.log('Order created:', response.data);
            onStepChange(3);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Order Review</h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
                <p className="mb-1">{shippingAddress.name}</p>
                <p className="mb-1">{shippingAddress.street}</p>
                <p className="mb-1">
                    {shippingAddress.city}, {shippingAddress.state}{' '}
                    {shippingAddress.zipCode}
                </p>
                <p>{shippingAddress.country}</p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Order Items</h3>
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between mb-1">
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Total Price</h3>
                <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button
                onClick={handleConfirmOrder}
                className="bg-medium-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                Confirm Order
            </button>
        </div>
    );

};

export default OrderReview;
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: Number,
    type: String,
    name: String,
    price: Number,
    images: [String],
    rating: Number,
    reviews: [
        {
            rating: Number,
            name: String,
            date: String,
            comment: String,
            image: { type: String, default: null },
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

export default Product;
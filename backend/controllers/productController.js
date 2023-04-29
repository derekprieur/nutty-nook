import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
    try {
        const startTime = Date.now();
        const products = await Product.find();
        const endTime = Date.now();
        console.log(`Time taken for getProducts: ${endTime - startTime} ms`);
        res.json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import mongoose, { isValidObjectId } from 'mongoose';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.status(201).json({ message: 'User created successfully', user: newUser, token });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Logged in successfully', user, token });
};

export const addToWishlist = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const validProductId = isValidObjectId(productId) ? productId : new mongoose.Types.ObjectId(productId);

        if (user.wishlist.includes(validProductId)) {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $pull: { wishlist: validProductId } },
                { new: true }
            );
            res.status(200).json({ message: 'Product removed from wishlist', wishlist: updatedUser.wishlist });
        } else {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $push: { wishlist: validProductId } },
                { new: true }
            );
            res.status(200).json({ message: 'Product added to wishlist', wishlist: updatedUser.wishlist });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating wishlist', error });
    }
};

export const getWishlist = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId).populate('wishlist');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Wishlist fetched successfully', wishlist: user.wishlist });

    } catch (error) {
        res.status(500).json({ message: 'Error fetching wishlist', error });
    }
};

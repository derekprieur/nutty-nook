import express from 'express';
const router = express.Router();

import { signup, login, addToWishlist, getWishlist } from '../controllers/userController.js';

router.post('/signup', signup);
router.post('/login', login);
router.post('/wishlist', addToWishlist)
router.get('/wishlist/:userId', getWishlist);

export default router;

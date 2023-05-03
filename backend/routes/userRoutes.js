import express from 'express';
const router = express.Router();

import { signup, login, addToWishlist, getWishlist, getUserDetailsByToken } from '../controllers/userController.js';

router.post('/signup', signup);
router.post('/login', login);
router.post('/wishlist', addToWishlist)
router.get('/wishlist/:userId', getWishlist);
router.post('/validate-token', getUserDetailsByToken);

export default router;

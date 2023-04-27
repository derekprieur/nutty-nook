import express from 'express';
import { createOrder, getOrdersByUserId } from '../controllers/orderController.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/user/:userId', getOrdersByUserId);

export default router;

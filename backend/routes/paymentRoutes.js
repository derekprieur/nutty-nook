import express from 'express';
import { createPaymentIntent } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/', createPaymentIntent);

export default router;

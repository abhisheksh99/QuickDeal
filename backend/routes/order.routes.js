import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPay,
  getMyOrders,
  getAllOrders,updateOrderToDelivered
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const Router = express.Router();

// Define routes clearly for POST and GET separately
Router.route('/')
  .post(protect, addOrderItems)  // POST: Add new order items
  .get(protect, admin, getAllOrders);  // GET: Get all orders (admin only)

Router.route('/myorders').get(protect, getMyOrders);  // GET: Get current user's orders

Router.route('/:id')
  .get(protect, getOrderById);  // GET: Get order by ID

Router.route('/:id/pay')
  .put(protect, updateOrderToPay);  // PUT: Update order to "Paid"

Router.route('/:id/deliver').put(protect,updateOrderToDelivered)

export default Router;

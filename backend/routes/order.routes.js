import express from 'express'
import { addOrderItems,getOrderById,updateOrderToPay ,getMyOrders} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'
const Router = express.Router()

Router.post('/', protect, addOrderItems)
Router.get('/myorders', protect, getMyOrders) 
Router.get('/:id', protect, getOrderById)
Router.put('/:id/pay', protect, updateOrderToPay)

export default Router
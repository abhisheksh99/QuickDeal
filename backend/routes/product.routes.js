import express from 'express'
import { getProducts,getProductById,deleteProductById,updateProduct,createProduct } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


const Router = express.Router()


// fetch all products
Router.route('/').get(getProducts).post(protect,admin,createProduct)

//  fetch a unique product with requst id  and delete a unique product
Router.route('/:id').get(getProductById).delete(protect,admin,deleteProductById).put(protect,admin,updateProduct)



export default Router
import express from 'express'
import { 
    getProducts, 
    getProductById, 
    deleteProductById, 
    updateProduct, 
    createProduct, 
    createProductReview, 
    getTopProducts 
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const Router = express.Router()

// Place the /top route before the /:id route
Router.get("/top", getTopProducts)

// fetch all products
Router.route('/').get(getProducts).post(protect, admin, createProduct)

//  fetch a unique product with request id and delete a unique product
Router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProductById)
    .put(protect, admin, updateProduct)

//create product review
Router.route('/:id/reviews').post(protect, createProductReview)

export default Router
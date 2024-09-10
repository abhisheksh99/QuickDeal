import express from 'express'
import { getProducts,getProductById } from '../controllers/productController.js'



const Router = express.Router()


// fetch all products
Router.route('/').get(getProducts)

//  fetch a unique product with requst id 
Router.route('/:id').get(getProductById)



export default Router
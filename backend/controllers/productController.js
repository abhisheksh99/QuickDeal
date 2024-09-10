import Product from '../models/product.model.js'
import asyncHandler from 'express-async-handler'


// fetch all products
const getProducts = asyncHandler(async(req,res) =>{
    const products = await Product.find({})

    res.json(products)

})


//  fetch a unique product with requst id 

const getProductById = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)

    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }

})

export {getProductById,getProducts}
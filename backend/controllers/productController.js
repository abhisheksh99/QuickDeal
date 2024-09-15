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

// delete a product private/admin

const deleteProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        await Product.findByIdAndDelete(req.params.id)
        res.json({message:'Product has been deleted'})

    }else{
        res.status(404)
        throw new Error("Product not found");
        
    }

    

    

})
// create a product post private/admin

const createProduct = asyncHandler(async(req,res)=>{
    const product = new Product({
        name:'Sample name',
        price:0,
        user:req.user._id,
        image:'/images/sample.jpg',
        brand:'Sample Brand',
        category:'Sample Category',
        countInStock:0,
        numReviews:0,
        description:'Sample description'
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})



// update a product put private/admin

const updateProduct = asyncHandler(async(req,res)=>{
    const {name,price,description,image,brand,category,countInStock} = req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
        

        const updateProduct = await product.save()
        res.json(updateProduct)
    


    }else{
        res.status(404)
        throw new Error("Product not found");
        
    }
  
    
})

export {getProductById,getProducts,deleteProductById,createProduct,updateProduct}

import Order from '../models/order.model.js'
import asyncHandler from 'express-async-handler'


// create new order post private

const addOrderItems = asyncHandler(async(req,res)=>{
    const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice} =req.body

    if(orderItems && orderItems.length ===0){
        res.status(400)
        throw new Error ('No order Items')
    }else{
        const order = Order({orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice,user:req.user._id})

        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})
// get order by id private
const getOrderById = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id).populate('user','name email')

    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error ('Order not found')
    }
})
// update order to paid private
const updateOrderToPay = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)

    if(order){
        order.isPaid=true
        order.paidAt= Date.now()
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email:req.body.payer.email_address
        }
        const updateOrder = await order.save()
        res.json(updateOrder)
    }else{
        res.status(404)
        throw new Error ('Order not found')

    }

        
})

// get logged in user  order to paid private
const getMyOrders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({user:req.user._id})

    res.json(orders)

        
})

// get all  order  private/admin
const getAllOrders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
})





// update order to delivered admin private

const updateOrderToDelivered = asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)

    if(order){
        order.isDelivered =true
        order.deliveredAt= Date.now()

        const updatedOrder = await order.save()
    res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error ('Order not found')
        
    }
    
})


export {addOrderItems,getOrderById ,updateOrderToPay,getMyOrders,getAllOrders,updateOrderToDelivered}
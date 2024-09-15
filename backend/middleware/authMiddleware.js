import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import asyncHandler from 'express-async-handler'


const protect = asyncHandler(async (req,res,next) => {
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            let token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user =  await User.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.log('Error:', error);
            res.status(401)
            throw new Error('Not authorised token failed')
            
        }
        
    }else {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
  
    
})

const admin = (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error('Not authorised as admin')
    }
}
export {protect,admin}

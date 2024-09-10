import express from 'express'
import dotenv from 'dotenv';
import connectDB from './DB/db.js';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';
import orderRoutes from './routes/order.routes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();


connectDB()
const app = express();
app.use(express.json())

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.get('/api/config/paypal',(req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)

app.use(errorHandler)




app.listen (process.env.PORT, () => {
    console.log(`App listening on ${process.env.PORT}`);
    
})
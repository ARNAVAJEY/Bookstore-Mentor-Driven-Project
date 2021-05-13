import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js' 
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()

connectDB()

const App = express()

if (process.env.NODE_ENV === 'development') {
    App.use(morgan('dev'))
  }

App.use(express.json())


App.get('/', (req, res) => {
    res.send('API is running...')
})

App.use('/api/products', productRoutes)
App.use('/api/users', userRoutes)
App.use('/api/orders', orderRoutes)
App.use('/api/upload', uploadRoutes)

App.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID)
 )

const __dirname = path.resolve()
App.use('/uploads', express.static(path.join(__dirname, '/uploads')))


App.use(notFound)

App.use(errorHandler)


const PORT = process.env.PORT || 5000

App.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`))
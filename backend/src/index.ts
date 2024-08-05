import express from 'express'
import authRoutes from './routes/authRoutes'

const app = express()
const port = 3000

//Middlewares
app.use(express.json())

app.use('/api/auth',authRoutes)
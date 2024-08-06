import express from 'express'
import authRoutes from './routes/authRoutes'
import cors from 'cors'
import { JWT_SECRET } from './config'
const app = express()
const port = 3000

//Middlewares
app.use(express.json())
app.use(cors())

const secret = JWT_SECRET

app.use('/api/auth',authRoutes)
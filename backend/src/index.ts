import express from 'express'
import authRoutes from './routes/authRoutes'
import cors from 'cors'
import { JWT_SECRET } from './config'
import { Server, Socket } from 'socket.io'
const app = express()
const port = 3000

//Middlewares
app.use(express.json())
app.use(cors())

//Socket .io server
const io = new Server()
io.on("connection",socket=>{
    console.log("connected")
})
const secret = JWT_SECRET

app.use('/api/auth',authRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
import express,{ Express,Request,Response, Router } from "express";
import zod from 'zod'
const router = Router()

const signupValidation = zod.object({
    name: zod.string().min(3).max(50),
    email: zod.string().email(),
    password: zod.string().min(8),
})
const loginValidation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})

export default function authRoutes(){

    router.post('/login',(req:Request,res:Response)=>{
        //Input validation
        
    })
    
    router.post('/signup',(req:Request,res:Response)=>{
        //Input validation
    })
}



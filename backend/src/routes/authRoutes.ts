import express,{ Express,Request,Response, Router } from "express";
import zod from 'zod'
import { PrismaClient } from "@prisma/client";
const router = Router()
const prisma = new PrismaClient()

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

    router.post('/login',async(req:Request,res:Response)=>{
        //Input validation
        const validateLogin = loginValidation.safeParse(req.body)
        if(!validateLogin.success) {
            return res.status(400).json(validateLogin.error.issues)
        }
        //Login logic
        const {email,password} =req.body
        const existingUser = await prisma.user.findUnique({where:{email,password}})
        if(!existingUser){
            return res.status(401).json({message:'Invalid email or password'})
        } 
        
    })
    
    router.post('/signup',async(req:Request,res:Response)=>{
        //Input validation
    })
}



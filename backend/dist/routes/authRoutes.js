"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authRoutes;
const express_1 = require("express");
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const signupValidation = zod_1.default.object({
    name: zod_1.default.string().min(3).max(50),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
const loginValidation = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
function authRoutes() {
    router.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
        //Input validation
        const validateLogin = loginValidation.safeParse(req.body);
        if (!validateLogin.success) {
            return res.status(400).json(validateLogin.error.issues);
        }
        //Login logic
        const { email, password } = req.body;
        const existingUser = yield prisma.user.findUnique({ where: { email, password } });
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    }));
    router.post('/signup', (req, res) => __awaiter(this, void 0, void 0, function* () {
        //Input validation
        const validateSignup = signupValidation.safeParse(req.body);
        if (!validateSignup.success) {
            return res.status(400).json(validateSignup.error.issues);
        }
        //Signup logic
        const { name, email, password } = req.body;
        // const hashedPassword =
        const user = yield prisma.user.findUnique({ where: { email } });
        if (user) {
            return res.status(400).json({ Err0r: "User already exists" });
        }
    }));
}

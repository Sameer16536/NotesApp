"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const port = 3000;
//Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Socket .io server
const io = new socket_io_1.Server();
io.on("connection", socket => {
    console.log("connected");
});
const secret = config_1.JWT_SECRET;
app.use('/api/auth', authRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

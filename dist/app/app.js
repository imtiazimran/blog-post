"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const posts_route_1 = require("./app/modules/posts.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use("/api/v1/blogs", posts_route_1.BlogRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to the blog posting website"
    });
});
// global error handler
app.use((err, req, res, next) => {
    const statusCode = 500;
    const message = "something went wrong";
    return res.status(statusCode).json({
        success: false,
        message: err.message || message,
        error: err
    });
});
// api error handle 
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "API Not Found !!"
    });
});
exports.default = app;

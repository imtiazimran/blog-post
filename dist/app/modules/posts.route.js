"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const posts_controller_1 = require("./posts.controller");
const router = express_1.default.Router();
// create blog post route
router.post("/create-blog", posts_controller_1.BlogController.postBlog);
// get all the blogs
router.get("/", posts_controller_1.BlogController.getBlogs);
// get single blogs
router.get("/:id", posts_controller_1.BlogController.getSingleBlogs);
// update blog information
router.put("/:id/", posts_controller_1.BlogController.updateBlog);
// delete blog 
router.delete("/:id/", posts_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;

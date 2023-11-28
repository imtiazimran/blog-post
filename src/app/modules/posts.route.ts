import express from "express";
import { BlogController } from "./posts.controller";

const router = express.Router()

// create blog post route
router.post("/create-blog", BlogController.postBlog)
// get all the blogs
router.get("/", BlogController.getBlogs)
// get single blogs
router.get("/:id", BlogController.getSingleBlogs)
// update blog information
router.put("/:id/", BlogController.updateBlog)
// delete blog 
router.delete("/:id/", BlogController.deleteBlog)


export const BlogRoutes = router
import { NextFunction, Request, Response } from "express";
import { BlogService } from "./posts.service";

const postBlog = async (req: Request, res: Response, next: NextFunction) =>{
    const newPost = req.body;
    try {
        const result = await BlogService.insertBlogInDB(newPost)
        
        res.status(200).json({
            success:true,
            message: "blog posted successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}


const getBlogs = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const result = await BlogService.getBlogsFromDB()
        res.status(200).json({
            success:true,
            message: `${result.length} Blogs Found`,
            data : result
        })
    } catch (error) {
        next(error)
    }
}

const getSingleBlogs = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const id = Number(req.params.id);
        const result = await BlogService.getSingleBlogFromDB(id)
        res.status(200).json({
            success:true,
            message: `Blog Found`,
            data : result
        })
    } catch (error) {
        next(error)
    }
}


const updateBlog =async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id);
            const updatedBlog = req.body;
            const result = await BlogService.updateBlogFromDB( id, updatedBlog)
            res.status(200).json({
                success:true,
                message: "blog updated successfully",
                data : result
            })
            
        } catch (error) {
            next(error)
        }
}



// softly delete blog from database
const deleteBlog =async (req:Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const result = await BlogService.deleteBlogFromDB(id)
        res.status(200).json({
            success:true,
            message: "blog deleted successfully",
            data : null
        })
    } catch (error) {
        next(error)   
    }
}
export const BlogController = {
    postBlog,
    getBlogs,
    getSingleBlogs,
    updateBlog,
    deleteBlog
}
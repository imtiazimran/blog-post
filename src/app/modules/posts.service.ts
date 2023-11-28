import { TBlog } from "./posts.interface";
import { blogModel } from "./posts.model";


// create new blog
const insertBlogInDB = async (blog: TBlog) =>{
    const result = await blogModel.create(blog)
    return result
}

// get all the blog
const getBlogsFromDB =async () => {
    const result = await blogModel.find()
    return result
}


// get sing blog
const getSingleBlogFromDB =async (id: number) => {
    const result = await blogModel.findOne({id})
    return result
}


// update blog information
const updateBlogFromDB =async (id : number, blog: Partial<TBlog>) => {
    const result = await blogModel.findOneAndUpdate({id}, blog);
    return result
}


// soft delete
const deleteBlogFromDB =async (id : number) => {
    const result = await blogModel.findOneAndUpdate({id}, {isDeleted: true});
    return result
}
export const BlogService = {
    insertBlogInDB,
    getBlogsFromDB,
    getSingleBlogFromDB,
    updateBlogFromDB,
    deleteBlogFromDB
}
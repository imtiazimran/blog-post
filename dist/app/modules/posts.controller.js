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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const posts_service_1 = require("./posts.service");
const postBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = req.body;
    try {
        const result = yield posts_service_1.BlogService.insertBlogInDB(newPost);
        res.status(200).json({
            success: true,
            message: "blog posted successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield posts_service_1.BlogService.getBlogsFromDB();
        res.status(200).json({
            success: true,
            message: `${result.length} Blogs Found`,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield posts_service_1.BlogService.getSingleBlogFromDB(id);
        let message;
        if (result && result.isDeleted === true) {
            message = "This data is deleted";
        }
        else if (result && result.isDeleted === false) {
            message = "data fetched successfully";
        }
        else {
            message = "Not found anything with this id";
        }
        res.status(200).json({
            success: true,
            message,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const updatedBlog = req.body;
        const result = yield posts_service_1.BlogService.updateBlogFromDB(id, updatedBlog);
        res.status(200).json({
            success: true,
            message: "blog updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
// softly delete blog from database
const deleteBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield posts_service_1.BlogService.deleteBlogFromDB(id);
        res.status(200).json({
            success: true,
            message: "blog deleted successfully",
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BlogController = {
    postBlog,
    getBlogs,
    getSingleBlogs,
    updateBlog,
    deleteBlog
};

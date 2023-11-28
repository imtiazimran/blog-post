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
exports.BlogService = void 0;
const posts_model_1 = require("./posts.model");
// create new blog
const insertBlogInDB = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.blogModel.create(blog);
    return result;
});
// get all the blog
const getBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.blogModel.find();
    return result;
});
// get sing blog
const getSingleBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.blogModel.findOne({ id });
    return result;
});
// update blog information
const updateBlogFromDB = (id, blog) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.blogModel.findOneAndUpdate({ id }, blog);
    return result;
});
// soft delete
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.blogModel.findOneAndUpdate({ id }, { isDeleted: true });
    return result;
});
exports.BlogService = {
    insertBlogInDB,
    getBlogsFromDB,
    getSingleBlogFromDB,
    updateBlogFromDB,
    deleteBlogFromDB
};

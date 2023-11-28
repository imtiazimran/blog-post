"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: [true, "title is required"],
        unique: true
    },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    content: {
        type: String,
        minlength: [200, "content should be at least 200 characters long"],
        required: [true, "content is required"]
    },
    author: {
        type: String,
        required: [true, "Author name is must required"]
    },
    authorProfile: { type: String },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });
// pre query for findOne
blogSchema.pre(/^find/, function (next) {
    const blogs = this;
    blogs.find({ isDeleted: { $ne: true } });
    next();
});
// pre for aggregator
blogSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
exports.blogModel = (0, mongoose_1.model)("blog", blogSchema);

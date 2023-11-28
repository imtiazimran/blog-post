"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodValidation = void 0;
const zod_1 = require("zod");
exports.zodValidation = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    content: zod_1.z.string().min(200, { "message": "content should be atleast 200 characters long" }),
    author: zod_1.z.string().max(20),
    authorProfile: zod_1.z.string().optional(),
    isDeleted: zod_1.z.boolean().default(false)
});

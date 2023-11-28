import { z } from "zod";

export const zodValidation = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string().min(200, {"message": "content should be atleast 200 characters long"}),
    author: z.string().max(20),
    authorProfile: z.string().optional(),
    isDeleted: z.boolean().default(false)
})
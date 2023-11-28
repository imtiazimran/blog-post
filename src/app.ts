import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { BlogRoutes } from "./app/modules/posts.route";

const app: Application  = express()

app.use(express.json())
app.use(cors())


// application routes
app.use("/api/v1/blogs", BlogRoutes)


app.get('/', (req:Request, res: Response)=>{
    res.status(200).json({
      success: true,
      message: "welcome to the blog posting website"
    })
})

// global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) =>{
    const statusCode = 500;
    const message = "something went wrong";
  
    return res.status(statusCode).json({
      success: false,
      message: err.message || message,
      error: err 
    })
  
  })

// api error handle 
app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "API Not Found !!"
    })
  })

  export default app;
import { Request, Response } from "express";


export class PostController {
    createPost(req: Request, res: Response) {
      const { Photo, description, data, type} = req.body;
       
    }

}
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const userDataBase = new UserDatabase();
        const users = await userDataBase.getAllUsers();

        res.status(200).send(users);

    } catch (error: any) {
        res.status(400).send({
            message: error.message
        });
    }
}

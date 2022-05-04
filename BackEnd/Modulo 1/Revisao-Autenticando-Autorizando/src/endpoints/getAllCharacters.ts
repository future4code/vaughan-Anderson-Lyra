import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getAllCharacters(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        if(!token) {
            res
            .status(422)
            .send("Esse endpoint exige uma autorização a ser passada nos headers da requisição");
        }

        const authenticator = new Authenticator();
        const getTokenData = authenticator.getTokenData(token);

        if(getTokenData.role !== "ADMIN") {
            res
            .status(401)
            .send("Apenas administradores podem acessar esse endpoint");
        }
       
        const userDataBase = new UserDatabase();
        const users = await userDataBase.getAllUsers();

        res.status(200).send(users);

    } catch (error:any) {
        res.status(400).send(error.message);
    }
}

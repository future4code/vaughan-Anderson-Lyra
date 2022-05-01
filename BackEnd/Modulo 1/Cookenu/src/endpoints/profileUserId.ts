import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../Services/Authenticator";

export const profileUserId  = async (req: Request, res: Response) => {
    try { 
        const id = req.params.id;
        const userDataBase = new UserDatabase();

        const user = await userDataBase.getUserById(id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        if (!token || "string" !== typeof token) {
            res.status(401).send({ message: "Não autorizado" });
        }

        res.status(200).send({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),

        });

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        });

    }
}
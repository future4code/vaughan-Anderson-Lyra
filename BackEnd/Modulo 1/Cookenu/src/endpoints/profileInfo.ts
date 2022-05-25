import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../Services/Authenticator";


export const getProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const userDataBase = new UserDatabase();
        const user = await userDataBase.getUserById(authenticationData.id);

        res.status(200).send({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),

        });

    } catch (error: any) {
        res.status(400).send({
            message: error.message
        });
    }
}
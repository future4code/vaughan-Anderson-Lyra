import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res
                .status(422)
                .send("Favor inserir todos os dados corretamente");
        }

        const userDataBase = new UserDatabase();
        const user = await userDataBase.findUserByEmail(email);

        if (!user) {
            res.status(409).send("Usuário não encontrado");
        }

        const hashManager = new HashManager();
        const isPasswordCorrect = await hashManager.compare(password, user.getPassword());

        if (!isPasswordCorrect) {
            res.status(401).send("Senha incorreta");
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.getId(),
            role: user.getRole()
        });

        res.status(200).send({
            message: "Logado com sucesso",
            token
        });

    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}
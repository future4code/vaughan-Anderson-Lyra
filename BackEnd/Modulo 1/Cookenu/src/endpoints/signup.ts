import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLE } from "../entities/User";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";


export const signup = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
            res
                .status(422)
                .send("Favor inserira todos os dados corretamente");

        }

        const userDataBase = new UserDatabase();
        const user = await userDataBase.findUserByEmail(email);

        if (user) {
            res.status(409).send("Email já esta em uso.");
        }

        if (password.length < 6) {
            throw new Error("Senha precisa ter no mínimo 6 caracteres.");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(
            id,
            name,
            email,
            hashPassword,
            USER_ROLE.NORMAL
        );

        await userDataBase.createUser(newUser);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({ id, role: USER_ROLE.NORMAL });

        res.status(200).send({ message: "Usuário criado com sucesso", token });



    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage);
    }
}




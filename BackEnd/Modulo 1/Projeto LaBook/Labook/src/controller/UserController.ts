import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignupInputDTO } from "../types/signupInputDTO";


export class UserController {
constructor (
    private userBusiness: UserBusiness
) { }

    async signup(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const input : SignupInputDTO = {
            name,
            email,
            password
            
        }
        try {
            const token = await this.userBusiness.signup(input)
            res.status(200).send({ mensage: "Usuário cadastrado com sucesso", token })
        } catch (error:any) {
            if (error instanceof Error) {
          return res.status(400).send({ error: error.message })
        }
        res.status(500).send({ message: "Erro no cadastro" })

    }
}
}

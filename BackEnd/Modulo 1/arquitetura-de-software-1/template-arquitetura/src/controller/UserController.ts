import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"




const userBusiness = new UserBusiness()

export class UserController {
    // getAll = async (req: Request, res: Response) => {
    //     try {
    //         const { email, password } = req.headers

    //         const token = await userBusiness.login(email, password)

    //         const {id, name, email, password, role}
    //         const result = await userBusiness.getAll(id, name, email, password, role)

    //         res.status(200).send(result)

                     
    //     } catch (error:any) {
    //         res.status(400).send({ message: error.message })
    //     }
    // }

    signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password, role } = req.body
            const token = await userBusiness.signup(name, email, password, role)
            res
            .status(201)
            .send({
                message: "Usuário Criado!",
                token
            })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    login = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { email, password } = req.body


            const token = await userBusiness.login(email, password)


            res.send({
                message: "Usuário logado!",
                token
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}




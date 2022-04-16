// import { Request, Response } from "express";
// import { connection } from "../data/connection";
// import { user } from "../types";

// export default async function createUser(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {

//       const { name, email, password } = req.body

//       if (!name || !email || !password) {
//          res.statusCode = 422
//          throw "'name', 'email' e 'password' são obrigatórios"
//       }

//       const id: string = Date.now().toString()

//       const newUser: user = { id, name, email, password }

//       await connection('Projeto_LabECommerce').insert(newUser)

//       res.status(201).send("Usuário criado!")

//    } catch (error: any) {

//       if (typeof error === "string") {

//          res.send(error)
//       } else {
         
//          console.log(error.sqlMessage || error.message);
//          res.status(500).send("Ops! Um erro inesperado ocorreu =/")
//       }

//    }
// }
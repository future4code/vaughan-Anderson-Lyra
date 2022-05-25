import { Request, Response } from "express";
import connection from "../connection";



import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if ( !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      let idGenerator = new Date().getTime()
      const id = idGenerator.toString()
      

      const newUser: user = { id, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      res.status(201).send({ newUser })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}
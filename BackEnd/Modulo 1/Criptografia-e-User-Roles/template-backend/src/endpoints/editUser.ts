import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { USER_ROLES } from "../types";

export default async function editUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body
      const token = req.headers.authorization as string

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }
      if (!token) {
         res.statusCode = 401
         res.statusMessage = "Não autorizado"
         throw new Error("Enviar um token valido")
      }

      const authenticator: Authenticator = new Authenticator()
      const tokenData = authenticator.GetTokenData(token)

      if(!tokenData) {
         res.statusCode = 401
         res.statusMessage = "Invalido"
         throw new Error("Usuario deslogado")
      }

      if(tokenData.role !== USER_ROLES.ADMIN) {
         res.statusCode = 403
         throw new Error("Apenas administradores podem editar usuarios")
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: req.params.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}
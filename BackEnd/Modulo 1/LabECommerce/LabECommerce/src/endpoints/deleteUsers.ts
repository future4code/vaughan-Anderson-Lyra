import {Request, Response} from 'express';
import { connection } from '../data/connection';





export default async function deleteUsers (
    req:Request,
    res:Response
):Promise <void>
{
  try {
      
    const { id } = req.params

    await connection('labecommerce_users')
    .delete()	
    .where({id})
               
    res.status(204).end()

  } catch (error:any) {
      res.status(500).send("Ops! Um erro inesperado ocorreu =/")
  }  
    
}
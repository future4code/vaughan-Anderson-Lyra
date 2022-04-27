import {Request, Response} from 'express';
import { connection } from '../data/connection';
import { labecommerce_users } from '../types';



export default async function getAllUsers (
    req:Request,
    res:Response
): Promise<void> 
{
   try  
   {
    const name = req.query

    const users: labecommerce_users[] = await connection('labecommerce_users')
    .select('*')
    .where(name)
    .orderBy('name')
    
    res.send(users)
   }
    catch (error:any) {
        res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}
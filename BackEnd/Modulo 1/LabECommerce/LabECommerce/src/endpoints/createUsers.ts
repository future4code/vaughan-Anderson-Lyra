import {Request, Response} from 'express';
import { connection } from '../data/connection';




export default async function createUsers(
    req:Request,
    res:Response
):Promise<void>
{
    try {
        
        const {name, email, password} = req.body
        await connection('labecommerce_users')
        .insert({
            name,
            email,
            password
        })
        res.status(201).send("Usuário criado!")
    } catch (error:any) {
        res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
}
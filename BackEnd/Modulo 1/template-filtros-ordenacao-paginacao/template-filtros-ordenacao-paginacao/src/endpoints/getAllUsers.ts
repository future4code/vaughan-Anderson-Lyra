import { Request, Response } from "express"
import { connection } from "../data/connection"






// a)
export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name

        const resultFilterByName = await connection.raw(`
            SELECT id, name, email, type FROM aula48_exercicio
            WHERE name LIKE "%${name}%";
        `)

        res.status(200).send(resultFilterByName[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


// b)

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type

        const resultFilterByType = await connection.raw(`
            SELECT id, name, email, type FROM aula48_exercicio
            WHERE type LIKE "%${type}%";
        `)

        res.status(200).send(resultFilterByType[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

//2)

export default async function selectByOrder (order: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${order};
    `)

    return result[0]
}

export const getByOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let order = req.query.order as string
        if (order === "") { order = "email" }
        const users = await selectByOrder(order)
        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
} 

//3)

export async function selectByPage (page: number): Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        LIMIT 5
        OFFSET ${page};
    `)

    return result[0]
}

export const getUserByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page: number = Number(req.query.page)
        let offset = 5 * (page - 1)
        const users = await selectByPage(offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
} 


export async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await selectAllUsers()

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
} 
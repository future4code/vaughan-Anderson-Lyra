import knex from "knex";
import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import moment from "moment";

const app = express();

app.use(express.json());
app.use(cors());





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
    await connection.insert({
        id: Date.now().toString(),
        name: name,
        nickname: nickname,
        email: email
    })
    .into("AllProjectUser");
}

app.put("/user", async (req: Request, res: Response) => {
    try {
        await createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send("Usuário cadastrado com sucesso!")
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const getAllUsers = async (): Promise<any> => {
    try {
        const response = await connection.raw(`
            SELECT * FROM AllProjectUser
        `)

        return response[0]
    } catch (error:any) {
        console.log(error.message)
    }
}

app.get("/user/all", async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        res.status(200).send(users)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const getUserById = async (UserId: string): Promise<any> => {
    try {
        const response = await connection("ToDoProjectUser").where('id', UserId)
        if(response){
            return response[0]
        }

    } catch (error) {
        console.log(error)
    }
}

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const user = await getUserById(id)

        res.status(200).send({Usuário: user})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const updateUser = async (UserId: string, userName: string, userNickName: string): Promise<void> => {
    try {
        await connection("ToDoProjectUser").update({
            name: userName,
            nickname: userNickName
        })
        .where("id", UserId)
    } catch (error:any) {
        console.log(error)
    }
}

app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        if(req.body.name.length !== 0 && req.body.nickname.length !== 0){
            const id = req.params.id as string
            await updateUser(id, req.body.name, req.body.nickname)
            res.status(200).send({message: "Usuário atualizado."})
        }
        else {
            res.status(400).send({message: "Usuário e nickname precisam ser preenchidos"})
        }

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const createTask = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
    await connection.insert({
        id: Date.now().toString(),
        title: title,
        description: description,
        status: "to_do",
        limit_date: moment(limitDate, "DD/MM/YYYY").toDate(),
        user_id: creatorUserId     
    })
    .into("ToDoProjectTask");
}

app.put("/task", async (req: Request, res: Response) => {
    try {
        if(req.body.title.length > 0 && req.body.description.length > 0 && req.body.limitDate.length > 0 && req.body.creatorUserId.length > 0){
            await createTask(
                req.body.title,
                req.body.description,
                req.body.limitDate,
                req.body.creatorUserId
            )
            res.status(200).send("Tarefa cadastrada com sucesso!")
        }else {
            res.status(400).send("Todos os campos precisam ser preenchidos!")
        }

    } catch (error:any) {

    }
})

const getTaskById = async (taskId: string): Promise<any> => {
    const response = await connection.raw(`
        SELECT ToDoProjectTask.id as task_id, title, description, limit_date, status,ToDoProjectUser.id as creatorUserId, nickname
        FROM ToDoProjectUser
        JOIN ToDoProjectTask on ToDoProjectUser.id = ToDoProjectTask.user_id
        WHERE ToDoProjectTask.id = "${taskId}";
    `)

    if(response){

        return {
            taskId: response[0][0].task_id,
            title: response[0][0].title,
            description: response[0][0].description,
            limitDate: moment(response[0][0].limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
            status: response[0][0].status,
            creatorUserId: response[0][0].creatorUserId,
            creatorUserNickname: response[0][0].nickname
        }
    }
}



const getTaskByUserId = async (userId: string): Promise<any> => {
    const response = await connection.raw(`
        SELECT ToDoProjectTask.id as taskId, title, description, ToDoProjectTask.limit_date as limitDate, ToDoProjectTask.user_id as creatorUserId, status, nickname as creatoUserNickname
        FROM ToDoProjectUser
        JOIN ToDoProjectTask ON ToDoProjectUser.id = ToDoProjectTask.user_id
        WHERE ToDoProjectUser.id = "${userId}";
    `)

    return response[0].map((task: any) => {
        return {
            taskId: task.taskId,
            title: task.title,
            description: task.description,
            limitDate: moment(task.limitDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
            creatorUserId: task.creatorUserId,
            status: task.status,
            creatorUserNickname: task.creatoUserNickname
        }
    })
}

app.get("/task", async (req: Request, res: Response) => {
    try {
        const userId = req.query.creatorUserId as string
        const response = await getTaskByUserId(userId)

        res.status(200).send({Tarefas: response})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const getUser = async (nickname: string): Promise<any> => {
    const response = await connection.raw(`
        SELECT id, nickname
        FROM ToDoProjectUser
        WHERE name LIKE "${nickname}" OR nickname LIKE "${nickname}";
    `)

    return {
        users: response[0].map((user: any) => {
            return {
                id: user.id,
                nickname: user.nickname
            }
        })
    }
}

app.get("/user", async(req: Request, res: Response) => {
    try {
        const query = req.query.query as string
        if(query.length > 0){
            const response = await getUser(query)

            res.status(200).send(response)
        }else {
            res.status(400).send({message: "Informe algum parâmetro para busca."})
        }

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

const designateResponsible = async (taskId: string, userId: string): Promise<void> => {
    await connection("ToDoProjectResponsibleTaskUser")
        .insert({
            task_id: taskId,
            user_id: userId
        })
}


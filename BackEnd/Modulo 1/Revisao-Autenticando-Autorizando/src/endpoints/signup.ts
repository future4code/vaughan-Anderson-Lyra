import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { User } from '../entities/User';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            res
            .status(422)
            .send("Inserira todos os dados corretamente");
        }
        
        const userDataBase = new UserDatabase();
        const user = await userDataBase.findUserByEmail(email);
        if (user) {
            res.status(409).send("Email ja esta em uso");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, hashPassword, role);
        await userDataBase.createUser(newUser);

        const authenticator = new Authenticator();
        const token = authenticator.generate({id, role})
            
        res.status(200).send({message: 'Usuario criado com sucesso', token});

    } catch (error:any) {
        res.status(400).send(error.message);
    }
}
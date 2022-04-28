import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { User } from '../entities/User';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';


export async function login(req: Request, res: Response) {
    try {
        const { email, password} = req.body;
        if (!email || !password)  {
            res
            .status(422)
            .send("Inserira todos os dados corretamente");
        }
        
        const userDataBase = new UserDatabase();
        const user = await userDataBase.findUserByEmail(email);
        if (!user) {
            res.status(409).send("Esse email não está cadastrado");
        }

        
        const hashManager = new HashManager();
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword());
        
        if(!passwordIsCorrect) {
            res.status(401).send("Senha incorreta");
        }
        
        const authenticator = new Authenticator();
        const token = authenticator.generate({ id: user.getId(), role: user.getRole() });
            
        res.status(200).send({message: 'Usuario logado com sucesso', token});

    } catch (error:any) {
        res.status(400).send(error.message);
    }
}
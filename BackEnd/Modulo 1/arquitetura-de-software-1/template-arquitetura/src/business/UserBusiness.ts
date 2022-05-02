import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user, USER_ROLES } from "../types/user";



const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

export class UserBusiness {

    signup = async (name:string, email:string, password:string, role:USER_ROLES) => {
        
                
           if ( !name ||  !email ||  !password ||   !role ) {
              throw new Error('Preencha os campos "name", "email" e "password"')
           }

                
           const id: string = idGenerator.generateId()
     
           const cypherPassword = await hashManager.hash(password);
     
           await userDB.insertUser({id, name, email, password: cypherPassword,  role})
     
           const token: string = authenticator.generateToken({
              id,
              role: role
           })
     
              return token
        
              
        
     }

login = async (email: string, password: string) => {

    if (!email || !password) {
        throw new Error("'email' e 'senha' são obrigatórios")
     }

     const user: user = await userDB.selectUserByEmail(email)

     if (!user) {
        throw new Error("Usuário não encontrado ou senha incorreta")
     }

     const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

     if (!passwordIsCorrect) {
        throw new Error("Usuário não encontrado ou senha incorreta")
     }
     const token = authenticator.generateToken({
        id: user.id,
        role: user.role
     })
     return token;
}

getAll = async (id:string, name:string, email:string, password:string, role:USER_ROLES) => {


    if (!email || !password) {
        throw new Error("'email' e 'senha' são obrigatórios")
     }

     const user: user = await userDB.selectUserByEmail(email)

     if (!user) {
        throw new Error("Usuário não encontrado ou senha incorreta")
     }

     const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

     if (!passwordIsCorrect) {
        throw new Error("Usuário não encontrado ou senha incorreta")
     }
        const token = authenticator.generateToken({
        id: user.id,
        role: user.role
        })
        return userDB.getAll(id, name, email, password, role);
            
    
}

}


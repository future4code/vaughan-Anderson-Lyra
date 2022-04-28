import { BaseDatabase } from "./BaseDatabase";
import { User } from "../entities/User";


export class UserDatabase extends BaseDatabase {
    public async createUser(user: User) {

           try {
            await BaseDatabase.connection("revisao_user")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            });
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }               
    
        }
      
public async findUserByEmail(email: string):Promise <User> {
    try {
        const user = await BaseDatabase.connection("revisao_user")
        .select("*")
        .where ({email});
        return user[0] && User.toUserModel(user[0]);
        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}
}

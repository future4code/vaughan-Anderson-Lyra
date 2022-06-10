import { TutorInputDTO } from "../model/UserTutor";
import { UserTutorDatabase } from "../data/UserTutorDatabase";
import { HashGenerator } from "../service/HashGenerator";
import { IdGenerator } from "../service/IdGenerator";



export class UserTutorBusiness {

    
    async createTutor(tutor: TutorInputDTO) {

        
        if (!tutor.email || !tutor.name || !tutor.password) {
            throw new Error("Todos os campos devem ser preenchidos");
        }

        
        if (tutor.password.length < 6 || tutor.name.length < 5) {
            throw new Error("O password deve ter no mínimo 6 caracteres e o nome deve ter no mínimo 5 caracteres");
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashGenerator();
        const hashPassword = await hashManager.hash(tutor.password);

        const tutorDatabase = new UserTutorDatabase();
        await tutorDatabase.createTutor(id, tutor.email, tutor.name, hashPassword);

    }


    async getTutorsBusiness(offset: number) {

        const userTutorDatabase = new UserTutorDatabase();
        const result = await userTutorDatabase.getTutorData(offset)

        return result
    }
}
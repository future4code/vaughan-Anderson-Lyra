
import { ClientDataBase } from "../data/ClientDatabase";
import { ErrorComplet } from "../error/ErrorComplet";
import { ClientInputDTO, ClientInsert } from "../model/Clients";
import { IdGenerator } from "../services/IdGenerator";


export class ClientBusiness {
    async insertClient(input: ClientInsert) {
        
        
        if(!input.name) {
            throw new ErrorComplet()
        }
        
        const idGenerator = new IdGenerator()
        const client: ClientInputDTO = {
            id: idGenerator.generate(),
            ...input
        }
       
        const clientDataBase = new ClientDataBase()
        const clientName = await clientDataBase.clientFindByName(input.name)
        
        if(clientName) {
            throw new Error("Cliente já está cadastrado")
        }

        const newClient = await clientDataBase.insertClient(client)

        return newClient
    }

    async getClientNameBusiness(name: string) {



        const clientDataBase = new ClientDataBase()
        const result = await clientDataBase.clientInfoName(name)

        return result 
    }
}
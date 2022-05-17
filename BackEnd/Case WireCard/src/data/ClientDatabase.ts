import { BaseDatabase } from "./BaseDatabase"
import { ClientInputDTO, ClientInsert } from "../model/Clients"


export class ClientDataBase extends BaseDatabase {
    
    private static TABLE_NAME = "wirecard_client"

    async insertClient(client: ClientInsert) {
        try {
            await this.getConnection()
            .insert(client)
            .into(ClientDataBase.TABLE_NAME)

            return "Criado com Sucesso"
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async clientFindByName(name: string): Promise<ClientInputDTO>{
        try {
            const client = await this.getConnection()
            .select("*")
            .where({name: name})
            .from(ClientDataBase.TABLE_NAME)

            return client[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")	
            }
        }
    }

    async clientInfoName(name: string){
        try {
            const clientInfo = await this.getConnection()
            .select(["wirecard_client.id as Id", "wirecard_client.name as Nome do Cliente"])
            .where({"wirecard_client.name": name})
            .from(ClientDataBase.TABLE_NAME)

            return clientInfo[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

}
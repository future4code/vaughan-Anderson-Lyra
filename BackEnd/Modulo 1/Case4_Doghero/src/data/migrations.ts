import { BaseDatabase } from './BaseDatabase';

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

export class CreateTables extends BaseDatabase{
    public createTable = async (): Promise<void> => {
        const result = await this.getConnection().raw(`
            CREATE TABLE IF NOT EXISTS doghero_user_tutor(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS doghero_wallking(
                id VARCHAR(255) PRIMARY KEY,
                date_walk DATE NOT NULL,
                start_walk TIME NOT NULL,
                finish_walk TIME,
                time VARCHAR(65) NOT NULL,
                latitude DECIMAL(10,8) NOT NULL,
                longitude DECIMAL(10,8) NOT NULL,
                quantity_dogs INT NOT NULL,
                price FLOAT,
                status VARCHAR(255) DEFAULT "PENDENTE",
                id_user_tutor VARCHAR(255) NOT NULL,
                FOREIGN KEY(id_user_tutor) REFERENCES doghero_user_tutor(id)
                
            );
        `)
        .then(() => { console.log("Tabelas criadas com sucesso!") })
        .catch(printError)
        .finally(() => {
            this.getConnection().destroy()
        })
    }
   
}

const createDB = new CreateTables();

createDB.createTable()
import { BaseDatabase } from "./BaseDatabase";


class Migrations extends BaseDatabase {
    public createTables = async (): Promise<void> => {
        try {
            await this.connection.raw(`
CREATE TABLE IF NOT EXISTS DOGHERO (
    id VARCHAR(255) PRIMARY KEY,
    status ENUM("A FAZER", "EM ANDAMENTO", "CONCLUIDO") DEFAULT "A FAZER",	
    date_shedule DATE NOT NULL,
    price FLOAT NOT NULL,
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    number_of_pets INT NOT NULL,
    duration INT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    initial_date timestamp NOT NULL,
    final_date timestamp NOT NULL
);
 `);
            console.log("Tabelas criadas com sucesso");
            await this.connection.destroy();
        } catch (error: any) {
            console.log(error.sqlMessage || error.message);
            await this.connection.destroy();
        }
    };
}

new Migrations().createTables();
// import { BaseDatabase } from "./BaseDatabase";


// const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

// export class CreateTables extends BaseDatabase {
//     createTables = () => this.connection.raw(`

//         CREATE TABLE IF NOT EXISTS labook_users (
//             id INT NOT NULL AUTO_INCREMENT, 
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL UNIQUE,
//             password VARCHAR(255) NOT NULL
//             );

//         CREATE TABLE IF NOT EXISTS labook_posts (
//             id INT NOT NULL AUTO_INCREMENT,
//             photo VARCHAR(255) NOT NULL,
//             description VARCHAR(255) NOT NULL,
//             type ENUM("normal","event") DEFAULT "normal",
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             author_id VARCHAR(255),
//             FOREIGN KEY (author_id) REFERENCES labook_users (id)
//       );
//       `)
//         .then(() => { console.log("Tables created") })
//         .catch(printError);
// }


// const migration = new CreateTables();
// migration.createTables();


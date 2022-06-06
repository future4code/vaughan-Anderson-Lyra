import {connection} from '../../src/index';

connection.raw(`
CREATE TABLE IF NOT EXISTS testUsers ( 
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL 
);

//AQUI PODEM SER CRIADAS OUTRAS TABELAS OU QUALQUER COMANDO SQL 

`).then(() => console.log(
    "MySql tables were successfully created"
)).catch(error => 
    console.log(error.message)
).finally(()=> {
    connection.destroy()
})
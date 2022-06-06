import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import knex, {Knex} from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
}
);

export const connection:Knex = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
    },
});


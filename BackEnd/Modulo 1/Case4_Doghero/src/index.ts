import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';
import { dogHeroRouter} from './routes/DogHeroRouter';
import { userTutorRouter } from './routes/UserTutorRouter';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/usertutor", userTutorRouter )
app.use("/walking", dogHeroRouter)





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
}
);



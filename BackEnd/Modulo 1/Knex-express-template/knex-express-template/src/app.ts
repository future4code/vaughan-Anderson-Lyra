import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());


const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection ("User").insert({
    id: Date.now().toString(),
    name: name,
    nickname: nickname,
    email: email
  })
.into("User");
};

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  try {
    await createUser(
      
      req.body.name,
      req.body.nickname,
      req.body.email
    );
    res.status(201).send("Criado com sucesso");
  } catch (error:any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});










const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());


// Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `)

//       return result[0][0]
//   }


// Assim a chamada funciona fora dos endpoints com .then()/.catch
//   getActorById("001")
//       .then(result => {
//           console.log(result)
//       })
//       .catch(err => {
//           console.log(err)
//       });

//   // Assim a chamada funciona fora dos endpoints com await
//   (async () => {
//     console.log(await getActorById("001") )
//   })()


// Ou então podemos chamá-la dentro de um endpoint
//   app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id

//       console.log(await getActorById(id))

//       res.end()
//     } catch (error:any) {
//           console.log(error.message)
//       res.status(500).send("Unexpected error")
//     }
//   }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
// Ele informa novamente o usuario com o id 001.


//   const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);
//       // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
//       // o valor no resultado!
//     const count = result[0][0].count;
//     return count;
//   };


//   const createActor = async (
//     id: string,
//     name: string,
//     salary: number,
//     dateOfBirth: Date,
//     gender: string
//   ): Promise<void> => {
//     await connection
//       .insert({
//         id: id,
//         name: name,
//         salary: salary,
//         birth_date: dateOfBirth,
//         gender: gender,
//       })
//       .into("Actor");
//   };


//   const updateActor = async (id: string, salary: number): Promise<any> => {
//     await connection("Actor")
//       .update({
//         salary: salary,
//       })
//       .where("id", id);
//   };

//   const deleteActor = async (id: string, salary: number): Promise<any> => {
//     await connection("Actor")
//       .delete()
//       .where("id", id);
//   };


//   const avgSalary = async (gender: string): Promise<any> => {
//       const result = await connection("Actor")
//     await connection("Actor")
//       .avg("salary as average")
//       .where({gender});
//   };


// Criar Atores
app.post("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
        INSERT INTO Actor (id, name, salary, Birth_date, gender)
        VALUES(
        ${Date.now().toString()},
        "${req.body.name}",
        ${req.body.salary},
        "${req.body.birthDate}",
        "${req.body.gender}"
        );
        `)
  
      res.status(201).send("Ator criado com sucesso!")
    } catch (error:any) {
      res.status(400).send(error.sqlMenssage || error.message);
    }
  });


  // Buscar todos os atores.
  app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection.raw(`
        SELECT * FROM Actor;
        `)  
      res.status(200).send({message: resultado[0]})
    } catch (error:any) {
      res.status(500).send(error.sqlMenssage || error.message);
    }
  });

  // Fazer atualizaçaõ por Id.
  app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actor")
        .update({ 
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender
        }).where({id: req.params.id})

         
      res.status(200).send({id: req.params.id})
    } catch (error:any) {
      res.status(400).send(error.sqlMenssage || error.message);
    }
  });

    // Deletar ator por Id.
  app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actor")
        .where({ 
        id: req.params.id
        }).delete() 

      res.status(200).send("Ator deletado com sucesso!")

    } catch (error:any) {
      res.status(500).send(error.sqlMenssage || error.message);
    }
  });


//   app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await(id);
  
//       res.status(200).send(actor)
//     } catch (error:any) {
//       res.status(400).send({
//         message: error.message,
//       });
//     }
//   });













const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
    console.error(`Failure upon starting server.`);
}
    });
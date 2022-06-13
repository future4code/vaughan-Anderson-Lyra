import { Walk} from './../model/DogHeroWalking';
import { Request, Response } from "express";
import { DogHeroBusiness } from "../business/DogHeroBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { WalkInputDTO } from "../model/DogHeroWalking";

export class DogHeroController {
    async walkCreate(req: Request, res: Response) {
        try {

            const input: WalkInputDTO = {
                dateWalk: req.body.dateWalk,
                startWalk: req.body.startWalk,
                finishWalk: req.body.finishWalk,
                time: req.body.time,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                quantityDogs: req.body.quantityDogs,
                idTutor: req.body.idTutor
            }

            const dogHeroBusiness = new DogHeroBusiness();
           await dogHeroBusiness.createWalk(input);

            res.status(200).send("Walkink criado com sucesso.");

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async index(req: Request, res: Response) {
        try {

            const dataAtual = req.query.dataAtual;

            const page = Number(req.query.page) || 1;

            const offset: number = 5 * (page -1);
      
            const dogHeroBusiness = new DogHeroBusiness();
            const result = await dogHeroBusiness.getWalkScheduled(dataAtual, offset);

            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


    async showWalkId(req: Request, res: Response) {
        try {

            const id = req.params.id as string;
           
            const dogHeroBusiness = new DogHeroBusiness();
            const result = await dogHeroBusiness.getShowWalk(id);
               
            res.status(200).send(result)  


        } catch (error:any) { 
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getWalkTutor(req: Request, res: Response){
        try {
            const id = req.params.id as string
      
            const dogHeroBusiness = new DogHeroBusiness()
            const walkTutor = await dogHeroBusiness.getWalkByTutor(id)

            res.status(200).send({walkTutor})
            
        } catch (error:any) {
            res.status(error.customErrorCode || 400).send({
                message: error.message
            })
        }
    }
  

}
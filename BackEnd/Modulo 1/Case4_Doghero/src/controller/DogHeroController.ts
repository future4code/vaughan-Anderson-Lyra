import { Request, Response } from "express";
import { DogHeroBusiness } from "../business/DogHeroBusiness";



export class DogHeroController {
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const {
                dateShedule,
                duration,
                latitude,
                longitude,
                numberOfPets,
                start_time,
                end_time
            } = req.body;

            const result = await DogHeroBusiness.create(
                dateShedule,
                duration,
                latitude,
                longitude,
                numberOfPets,
                start_time,
                end_time
            );
                
            res.status(200).send(result);
        }
        catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }

}
import { Request, Response } from "express";
import { UserTutorBusiness } from "../business/UserTutorBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { TutorInputDTO } from "../model/UserTutor";

export class UserTutorController {
    async signup(req: Request, res: Response) {
        try {

            const input: TutorInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userTutorBusiness = new UserTutorBusiness();
            await userTutorBusiness.createTutor(input);

            res.status(200).send("Tutor criado com sucesso.");

        } catch (error:any) {
            res.status(400).send({ error: error.message});
        }

        await BaseDatabase.destroyConnection();
    }

    async getUsersTutors(req: Request, res: Response) {
        try {

            const page = Number(req.query.page) || 1;

            const offset: number = 5 * (page -1);

            const tutorBusiness = new UserTutorBusiness();
            const result = await tutorBusiness.getTutorsBusiness(offset);

            res.status(200).send(result);

        } catch (error:any) {
            res.status(400).send({ error: error.message});
        }

        await BaseDatabase.destroyConnection();
    }

}
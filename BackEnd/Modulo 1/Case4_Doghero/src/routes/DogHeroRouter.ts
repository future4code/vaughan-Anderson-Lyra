import express from "express";
import { DogHeroController } from "./../controller/DogHeroController";


export const dogHeroRouter = express.Router();

const dogHeroController = new DogHeroController();

dogHeroRouter.post("/signup", dogHeroController.walkCreate);
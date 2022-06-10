import express from "express";
import { DogHeroController } from "./../controller/DogHeroController";


export const dogHeroRouter = express.Router();

const dogHeroController = new DogHeroController();

dogHeroRouter.post("/signup", dogHeroController.walkCreate);

dogHeroRouter.get("/WalkDateTodayOrAll", dogHeroController.index);

dogHeroRouter.get("/showWalk/:id", dogHeroController.showWalkId);

dogHeroRouter.get("/walkTutor/:id", dogHeroController.getWalkTutor);


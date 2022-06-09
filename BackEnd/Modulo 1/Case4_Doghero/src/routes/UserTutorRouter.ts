import express from "express";
import { UserTutorController } from "./../controller/UserTutorController";


export const userTutorRouter = express.Router();

const userTutorController = new UserTutorController();

userTutorRouter.post("/signup", userTutorController.signup);

userTutorRouter.get("/dataTutors", userTutorController.getUsersTutors);
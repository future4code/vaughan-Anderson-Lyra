import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../Services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipes } from "../entities/Recipes";
import { IdGenerator } from "../Services/IdGenerator";

export const publicRecipes = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const userDataBase = new UserDatabase();
        await userDataBase.getUserById(authenticationData.id);

        if(!token || "string" !== typeof token) {
            res.status(401).send({ message: "Não autorizado" });
        }

        const { title, description} = req.body;

        if (!title || !description) {
            res.status(422).send("Favor preencher os campos.");
        }

        
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const recipe = new Recipes(
            id,
            title,
            description,
        );

        const recipeDatabase = new RecipeDatabase();
        await recipeDatabase.createRecipes(recipe);

        res.status(200).send({ message: "Receita criada com sucesso." });

    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage);
    }


}

import { Request, Response} from 'express';
import { RecipeDatabase } from '../data/RecipeDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../Services/Authenticator';



export const getRecipes = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.getRecipeById(id);

        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const userDataBase = new UserDatabase();
        await userDataBase.getUserById(authenticationData.id);

        if (!token || "string" !== typeof token) {
            res.status(401).send({ message: "Não autorizado" });
        }

        res.status(200).send({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            
        });

    } catch (error:any) {
        res.status(400).send({
            message: error.message
        });

    }
}


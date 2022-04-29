import { Recipes } from "../entities/Recipes";
import { BaseDatabase } from "./BaseDatabase";



export class RecipeDatabase extends BaseDatabase {
    getRecipes() {
        throw new Error('Method not implemented.');
    }
    public async createRecipes(recipe: Recipes) {

        try {
            await BaseDatabase.connection("Recipes")
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                });
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }



    public async getRecipeById(id: string): Promise<Recipes> {
        try {
            const recipe = await BaseDatabase.connection("Recipes")
                .select("*")
                .where({ id });
            return recipe[0] && Recipes.toRecipesModel(recipe[0]);

        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}




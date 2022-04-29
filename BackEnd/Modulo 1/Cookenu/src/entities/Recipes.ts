export class Recipes {
    createRecipe(newRecipe: Recipes) {
        throw new Error("Method not implemented.");
    }

    constructor(
        public id: string,
        public title: string,
        public description: string,
        
    ) { }

    getId(): string {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getDescription(): string {
        return this.description;
    }
      

    static toRecipesModel(recipe: any): Recipes {
        return new Recipes(
            recipe.id,
            recipe.title,
            recipe.description,

        )
    }
}



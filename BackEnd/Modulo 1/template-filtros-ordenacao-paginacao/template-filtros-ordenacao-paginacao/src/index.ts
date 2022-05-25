import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getByOrder, getUsersByName, getUsersByType } from "./endpoints/getAllUsers";

app.get("/recipes", getAllRecipes)

app.get("/users", getUsersByName)

app.get("/order", getByOrder)

app.get("/user/:type", getUsersByType)
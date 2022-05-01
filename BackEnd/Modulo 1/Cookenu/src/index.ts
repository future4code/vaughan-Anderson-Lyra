import { app } from "./app";
import { publicRecipes } from "./endpoints/createRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getRecipes } from "./endpoints/getRecipes";
import { login } from "./endpoints/login";
import { getProfile } from "./endpoints/profileInfo";
import { profileUserId } from "./endpoints/profileUserId";
import { signup } from "./endpoints/signup";



app.get("/user", getAllUsers);
app.get("/user/profile", getProfile);
app.get("/user/:id", profileUserId);
app.get("/recipes", getRecipes );
app.post("/user", signup);
app.post("/user/login", login);
app.post("/recipes/create", publicRecipes );

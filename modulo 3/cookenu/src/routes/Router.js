import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>

                <Route exact path="/">
                    <RecipesListPage />
                </Route>

                <Route exact path="/addrecipespage">
                    <AddRecipesPage />
                </Route>

                <Route exact path="/recipedetailpage">
                    <RecipeDetailPage />
                </Route>

                <Route >
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
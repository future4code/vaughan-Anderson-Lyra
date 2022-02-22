import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom"
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
                <Routes>

                    <Route exact path='/login' element={<LoginPage />} />

                    <Route exact path='/cadastro' element={<SignUpPage />} />

                    <Route exact path='/' element={<RecipesListPage />} />

                    <Route exact path='/adicionar-receita' element={<AddRecipesPage />} />

                    <Route exact path='/detalhe/:id' element={<RecipeDetailPage />} />

                    <Route exact path='/error' element={<ErrorPage />} />

                </Routes>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
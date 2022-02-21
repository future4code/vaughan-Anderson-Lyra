import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Cadastros from '../pages/Cadastros/Cadastros';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedList from '../pages/FeedList/FeedList';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>

                <Route exact path="/feedlist">
                    <FeedList />
                </Route>

                <Route exact path="/cadastro">
                    <Cadastros />
                </Route>
                
                <Route exact path="/postpage">
                    <PostPage />
                </Route>

                <Route >
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const history = useNavigate()


    const goToVoltar = () => {
        history("/")
    }

   // const goToEntrar = () => {
   //     history("/trips/application")
    //}

    return (
        <div>
            <h1>Login</h1>
            <button onClick={goToVoltar}>Voltar</button>
            <button >Entrar</button>
        </div>
    )
}
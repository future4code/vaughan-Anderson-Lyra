import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const history = useNavigate()

    const goToListTripPage = () => {
        history("/trips/list")
    }

    const goToLoginPage = () => {
        history("/login")
    }

    return (
        <div>
            <p>Pagina de HomePage</p>
            <p> LabeX</p>
            <button onClick={goToListTripPage}>Ver Viagens</button>
            <button onClick={goToLoginPage}>Área de Admin</button>
        </div>
    )
}
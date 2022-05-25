import React from "react";
import { useNavigate } from "react-router-dom";

export const ApplicationFormPage = () => {

    const history = useNavigate()


    const goToVoltar = () => {
        history("/trips/List")
    }

   // const goToEnviar = () => {
   //     history("/trips/application")
    //}

    return (
        <div>
            <p>Pagina de ApplicationFormPage</p>
            <button onClick={goToVoltar}>Voltar</button>
            <button >Enviar</button>
        </div>
    )
}
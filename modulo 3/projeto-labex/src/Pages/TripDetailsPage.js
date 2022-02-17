import axios from "axios";
import React, { useEffect } from "react";

export const TripDetailsPage = () => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-vaughan/trip/pgFafXP24aDQK6Xx9wCY', {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log('Deu certo', response.data)
        })
        .catch((error) => {
            console.log('Deu errado', error.response)
        })
    }, [])

    return (
        <div>
            <p>Pagina para o adminstrador ver o detalhe da viagem e os candidatos escolhidos </p>
           
        </div>
    )
}
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



export function ListTripPage() {
  const history = useNavigate()
  
  const listTrips= () => {
    
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-vaughan/trips')
    .then((response) => {
        console.log('Deu certo', response.data)
    })
    .catch((error) => {
        console.log('Deu errado', error.response)
    })
}


  const goToVoltar = () => {
    history("/")
}

  const goToApplicationFormPage = () => {
      history("/trips/application")
  }


  return (
    <div >
      
      <button onClick={goToVoltar}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      <h1>Lista de Viagens </h1>
      {listTrips}
    </div>
  );
}


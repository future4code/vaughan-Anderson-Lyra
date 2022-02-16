import React from 'react';
import { useNavigate } from "react-router-dom";


export function ListTripPage() {
  const history = useNavigate()


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
    </div>
  );
}


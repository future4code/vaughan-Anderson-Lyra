import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CardContainer } from '../components/styled';



export function ListTripPage() {
  const history = useNavigate()

  const [trips, setTrips] = useState([])
  
  useEffect(() =>{
    listTrips()
  },[])

  const listTrips= () => {
    
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/anderson-vaughan/trips')
    .then((response) => {
      setTrips(response.data.trips)
        console.log('Deu certo', response.data.trips)
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
console.log(trips)


const renderTrips = trips.map((travel) =>{
  
    return (
      <CardContainer key={(travel.id)}>

       <p>Nome: {travel.name}</p>
       <p>Descrição: {travel.description}</p>
       <p>Planeta: {travel.planet}</p>
       <p>Duração: {travel.durationInDays}</p>
       <p>Data: {travel.date}</p>
      
        </CardContainer>
    )
})

  return (
    <div >
      
      <button onClick={goToVoltar}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      <h1>Lista de Viagens </h1>
      {renderTrips}
    </div>
  );
}


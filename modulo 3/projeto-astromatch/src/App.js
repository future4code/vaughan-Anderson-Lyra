import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Pages/Header";
import { BASE_URL } from "./constants/url";


const App = () => {

  const [profile, setProfile] = useState({})
  
  
useEffect(() => {
  getPerfil()
},[])
  
const clearMatch = () => {
  axios.put(`${BASE_URL}clear`)
    .then((response) =>{
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.response)
    })
}

const getPerfil = () => {
  axios.get(`${BASE_URL}person`)
  .then((response) => {
    console.log(response.data.profile)
    setProfile(response.data.profile)
  })
  .catch((error) => {
    console.log(error.response)
  })
}




  return (
    <div>
      <Header/>
      <button onClick={clearMatch}>Apagar Match</button>
      <button >Dar Match</button>
      <getPerfil/>
    </div>
  );
}

export default App;

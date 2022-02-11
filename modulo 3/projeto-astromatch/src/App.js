//import axios from "axios";
import React, { useState } from "react";
//import { BASE_URL } from "./constants/url";
import Header from "./components/Header";
//import { HeaderContainer } from "./Pages/styled";
import ProfilePage from "./Pages/ProfilePage";
import ListaDeMatches from "./Pages/ListaDeMatches";


const App = () => {

  const [telaAtual, setTelaAtual] = useState("home")
  
  

  
/*const clearMatch = () => {
  axios.put(`${BASE_URL}clear`)
    .then((response) =>{
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.response)
    })
}


*/

const irParaLista = () => {
  setTelaAtual("matches")
}

const irParaHome = () => {
  setTelaAtual("home")
}

const escolheTela = ()=> {
  switch (telaAtual) {
    case "home" : 
    return (
      <ProfilePage/>
    );   
    case "matches" :
      return (
        <ListaDeMatches/>
      ); default : <ProfilePage/>
  }
}



  return (
    <div>
      <Header irParaLista={() => irParaLista()}
              irParaHome={() => irParaHome()}
      />
      
      <button >Apagar Match</button>
      <button >Dar Match</button>
      {escolheTela()}
    </div>
  );
}

export default App;

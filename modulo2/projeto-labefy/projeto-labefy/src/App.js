import axios from 'axios'
import React from 'react';
import styled from 'styled-components';


//Não entendo pq os componentes do 'styled-components' não estão funcionando.
/*
const cardList = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }    
`
*/


export default class App extends React.Component {
  state={
    playlists:[],
    inputValue:""
  }

  componentDidMount(){
    this.getPlaylists()
  }

  handleInput=(event)=>{
    this.setState({inputValue:event.target.value})

  }



getPlaylists =()=>{
 const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
 const axiosConfig = {headers:{Authorization:"anderson-lyra-vaughan"}}
axios
.get(url,axiosConfig)
.then((response)=>{
  this.setState({playlists:response.data.result.list})
  console.log(response.data.result.list)
})
.catch((err)=>{
  alert("Ocorreu um erro, tente novamente")
 console.log(err.response)
})
  }

  createPlaylist=()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {name:this.state.inputValue}
    const axiosConfig = {headers:{Authorization:"anderson-lyra-vaughan"}}

    axios.post(url,body,axiosConfig)
    .then((res)=>{
      alert("playlist criada com sucesso")
      this.setState({inputValue:""})
      this.getPlaylists()

    })
    .catch((err)=>{
      console.log(err.response.data)
      alert("Preenchimento incorreto, favor tentar novamente")
    })
  }


  delPlaylist=(id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    
    const axiosConfig = {headers:{Authorization:"anderson-lyra-vaughan"}}
    
    axios.delete(url, axiosConfig)
    .then((res) =>{
      alert("Playlist excluida com sucesso")
      this.getPlaylists()
    })
    .catch((err)=>{
      alert("Ocorreu um erro, favor tentar novamente")
    })
  }

  
  render(){
    const lista= this.state.playlists.map((listaDeMusicas)=>{
      return (
      <div key={listaDeMusicas.id}>
        {listaDeMusicas.name}
        <button onClick={() => this.delPlaylist(listaDeMusicas.id)} > X </button>
      </div>)
      
    })
    console.log("estado", this.state)
    return (
      <div>
         <input
         placeholder="Nome da Playlist"
         value={this.state.inputValue}
         onChange={this.handleInput}
         />
         <button onClick={this.createPlaylist}>Criar Playlist</button>
      {this.state.playlists.length>0? (lista): <p>Carregando ...</p>}
          
      </div>
    );
  }
}


        
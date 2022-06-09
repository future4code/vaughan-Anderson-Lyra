
import './App.css';
import axios from "axios"
import React from 'react';


 class App extends React.Component {

  state={
    inputUser:"",
    inputEmail:"",
    listUsers: [],
    home: false
  }

  onChangeNome = (event) => {
    this.setState({ inputUser: event.target.value})

  }
  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value})

  }

  componentDidMount() {
    this.getAllUsers()
  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const bady = {
      nome: this.state.inputUser
      email: this.state.inputEmail
    }
const axiosConfig = { headers: { Authorization: "anderson-lyra-labenu" }}

axios
.post(url, body, axiosConfig)
.then((response) => {
  alert("Usuário cadastrado com sucesso")
  this.setState({ inputUser: "", inputEmail: "", home: true})
  this.getAllUsers()
})
.catch((error) => {
  alert(error.response.data)
})
}

getAllUsers = () => {
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const axiosConfig = {headers: {Authorization: "anderson-lyra-labenu"}}

axios
.get(url, axiosConfig)
.then((response) => {
  console.log(response)
  this.setState({listUsers: response.data})
})
.catch((error) => {
  console.log(error.response.data)
  alert (error.response.data)
})
}

deleteUser = (id) => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
  const axiosConfig = {headers: {Authorization: anderson-lyra-labenu}}
  axios.delete(url)
}

render () {

const listName = this.state.listUsers.map ((user) => {
  return (
    <p>
      <li>{user.name}</li>
      <button onClick={() => this.deleteUser(user.id)}>Remover</button>
    </p>
  )
})

const atualizarTela = () => {
  if (this.state.home === true)
  { return <div>
      <input 
      value = {this.state.inputUser} 
      onChange = {this.onChangeNome}
      placeholder = 'Nome'
      />
      <input
      value = {this.state.inputEmail}
      onChange = {this.onChangeEmail}
      placeholder = 'Email'
      />
      <button onClick = {this.createUser}>Enviar</button>
    </div>
  
  } else { return {listName}}
}

  return (
    <>{atualizarTela()}</>
  )
  }
}


export default App;

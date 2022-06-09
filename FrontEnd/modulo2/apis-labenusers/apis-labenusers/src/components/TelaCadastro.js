import React from "react";
import axios from "axios"

export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" 
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios
        .post(url, body, {
            headers: {
                Authorization: "anderson-lyra-vaughan" 
            }
        })  
        .then((response) => {
            alert("Usuário cadastro com sucesso!")
            this.setState({nome:"", email:""})
        })
        .catch((error) => {
            alert(error.response.data.mensage)
        })

    }

    render() {
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }

}
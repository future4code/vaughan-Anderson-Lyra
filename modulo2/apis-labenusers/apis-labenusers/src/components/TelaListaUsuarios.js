import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    background-color: aqua;
`


export default class TelaListaUsuarios extends React.Component {

state = {
    usuarios: []
}

componentDidMount() {
    this.pegarUsuarios()
}

pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" 
    axios.get(url, {
        headers: {
            Authorization: "anderson-lyra-vaughan" 
        }
    })  
    .then((response) => {
        this.setState({usuarios: response.data})
    })
    .catch((error) => {
        alert("Ocorreu um erro, favor tentar novamente.")
    })

}

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "anderson-lyra-vaughan"
            }
        })
        .then((response) => {
            alert("Usuário excluido com sucesso.")
            this.pegarUsuarios()
        })
        .catch((error) => { 
            alert("Ocorrei um erro")

        })

    }



    render() {
        
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastros</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}
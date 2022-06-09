import "./styles.css";
import React from "react";
import styled from "styled-components";

const CardTexto = styled.div`
  display: flex;
  word-spacing: 1px;
  margin: 10px 0;
  padding: 0 8px;
  justify-content: left;
`;

const TextoPreto = styled.p`
  color: black;
`;

const TextoVermelho = styled.p`
  color: red;
`;

class App extends React.Component {
  state = {
    inputNome: "",
    inputTexto: "",
    CampoConversa: [ ],
  
  };

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  guardaTexto = (event) => {
    this.setState({ inputTexto: event.target.value });
  };

  adicionarConversa = () => {
    const novoNome = {
      id: Math.random(),
      nome: this.state.inputNome,
      texto: this.state.inputTexto,
    };
    const copia = [...this.state.CampoConversa, novoNome];
    this.setState({ CampoConversa: copia });
    this.setState({ inputNome: "", inputTexto: "" });
  };


  render() {
    const listaConversas = this.state.CampoConversa.map((pessoa) => {
      return (
        <CardTexto key={pessoa}>
          <TextoVermelho> {pessoa.nome}:</TextoVermelho>
          <TextoPreto> {pessoa.texto} </TextoPreto>
          
        </CardTexto>
      );
    });

    return (
      <div className="App">
        
        <input
          onChange={this.guardaNome}
          value={this.state.inputNome}
          placeholder="Nome"
        />
        <input
          onChange={this.guardaTexto}
          value={this.state.inputTexto}
          placeholder="Texto"
        />
        <button onClick={this.adicionarConversa}> Enviar </button>
        {listaConversas}
      </div>
    );
  }
}

export default App;
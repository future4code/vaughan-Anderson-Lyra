import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: 1,
        texto: 'Texte 1',
        completa: false
      },
      {
        id: 2,
        texto: 'Texte 2',
        completa: true
      }
    ],
    inputValue: '',
    filtro: '',
    novaTarefa: ''
  }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({ novaTarefa: event.target.value })
  }

  criaTarefa = () => {
    console.log('Adicionar Tarefa', this.state.novaTarefa)
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.novaTarefa,
      completa: false
    }
    const novaListaDeTarefas = [novaTarefa, ... this.state.tarefas]
    this.setState({tarefas: novaListaDeTarefas})
  }

  selectTarefa = (id) => {
    console.log('Seleção da Tarefa', id)
    const novaListaDeTarefas = this.state.tarefas.map((tarefas) => {
      if(id === tarefas.id) {
        const novaTarefa = {
          ...id,
          completa: !id.completa
        }
        return novaTarefa
      } else {
        return id
      }
    })



    this.setState({tarefas: novaListaDeTarefas})

  }

  onChangeFilter = (event) => {
    this.setState({ completa: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

import logo from './logo.svg';
import './App.css';
import './components/Etapa1';
import './components/Etapa2';
import './components/Etapa3';
import './components/Final';




export default class App extends React.Component {

  state = {
    etapa: 1
  };


render () {
  const renderizaEtapa = () => {
    if (this.state.etapa === 1) {
      return <div>Etapa1</div>;
    } else if (this.state.etapa === 2) {
      return <div>Etapa2</div>
    } else if (this.state.etapa === 3) {
      return <div>Etapa3</div>
    } else if (this.state.etapa === 4) {
      return <div>Final</div>
    }
  }



      return <div className="App">{renderizaEtapa}
      <button></button>Próxima etapa</div>
}
}



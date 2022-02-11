//import {HeaderContainer} from "../Pages/styled"


const Header = (props) => {
  return (
    <div>
      <button onClick={props.irParaHome}>Home</button>
      <h1>astromatch</h1>
      <button onClick={props.irParaLista}>Lista</button>
    </div>
  );
}

export default Header;
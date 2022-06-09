import react from "react";


class Etapa1 extends React.Component {

    render () {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>   
                <h2>1. Qual o seu nome?</h2> 
                <input></input>   
                <h2>2. Qual sua idade?</h2> 
                <input></input> 
                <h2>3. Qual seu email?</h2> 
                <input></input> 
                <h2>1. Qual a sua escolaridade?</h2> 
                <select>
                  <option value = 'Ensino médio incompleto'> Ensino Médio Incompleto</option>
                  <option value = 'Ensino médio completo'> Ensino Médio Completo</option>
                  <option value = 'Ensino superior incompleto'> Ensino Superior Incompleto</option>
                  <option value = 'Ensino superior completo'> Ensino Superior Completo</option>  
                </select> 
                <button type="submit">Próxima etapa</button>
            </div>
        )

    }


}



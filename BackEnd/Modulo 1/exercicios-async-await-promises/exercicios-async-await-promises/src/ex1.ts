import axios from 'axios'
import { baseURL } from './baseURL'


// *a.* Qual endpoint você deve utilizar para isso?
    //getSubscribers
// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
    //<void[]>
// c. Implemente uma função nomeada que faça o que foi pedido.  


async function getSubscribers () {
    return await axios.get(`${baseURL}/subscribers`)
}

getSubscribers()
    .then(res => {return res.data})
    .then(console.log) 
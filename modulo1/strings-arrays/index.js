//INTERPRETAÇÃO
//Exercicio 1

/*
let array
console.log('a. ', array)
// somente para informar que tem um array dentro da string.

array = null
console.log('b. ', array)
//

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// Significa o tamanho da propriedade que é 11.

let i = 0
console.log('d. ', array[i])
// Está informando a posicao 0, que será o numero 3.

array[i+1] = 19
console.log('e. ', array)
// Acrescentando o 19 após a posição 0.

const valor = array[i+6]
console.log('f. ', valor)
// Informa a posicao 0+6 que será informado o numero 9.
*/

//Exercicio 2
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Primeiro coloca tudo em Maiusculo
// Troca todas as letras "A" por "I" detro da frase.
// imprime o numero de caracteres usado na frase.
*/


//ESCRITA DE CÓDIGO
//Exercicio 1
/*
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu email")

const fraseComp = ("O e-mail " +  emailDoUsuario + " foi cadastrado com sucesso. Seja bem vinda(o), " + nomeDoUsuario)
console.log(fraseComp)
*/


//Exercicio 2
/*
//a) Imprima no console o array completo
const comidaFavorita = ["Churrasco", "Feijoada", "Lasanha", "Pizza", "Pão"]
console.log(comidaFavorita)

//b)
const mensagem = ("Essas são as minhas comidas preferidas: ")
console.log(mensagem + `\n ${comidaFavorita[0]} \n ${comidaFavorita[1]} \n ${comidaFavorita[2]} \n ${comidaFavorita[3]} \n ${comidaFavorita[4]}`)

//c)

const comidaFavoritaPerg = prompt("Qual a sua comida preferida?")
const escolhaDaComida = comidaFavoritaPerg

const trocandoPerguntaCom = comidaFavorita.replaceAll(comidaFavorita[1], escolhaDaComida)
console.log(trocandoPerguntaCom)
*/

//Exercicio 3
//a)
/*
let listaDeTarefas
const pergunta1 = prompt("Escreva a tarefa 1")
const pergunta2 = prompt("Escreva a tarefa 2")
const pergunta3 = prompt("Escreva a tarefa 3")
const listaArm = [pergunta1, pergunta2, pergunta3]
//b)
console.log(listaArm)
//c)
const indiceDoUsuario = prompt("Qual tarefa realizou hoje? 1, 2 ou 3")
const escolhaDoIndice = [indiceDoUsuario]
console.log(escolhaDoIndice)
//d)
const remover = listaArm.splice([escolhaDoIndice -1], 1)
//e)
console.log(listaArm)
//f)
*/




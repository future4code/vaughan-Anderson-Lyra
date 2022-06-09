/* Exercicio 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) 
console.log(filme.elenco[filme.elenco.length - 1]) 
console.log(filme.transmissoesHoje[2])

Respostas: 
// Matheus Nachtergaele (pega a primeira posição da Array)
//Virginia Cavendish (pega a ultima posição da Array)
//canal: "Globo", horario: "14h" (pega a ultima posição da Array)
*/

/*Exercicio 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
//Respostas:
// a) 
// nome: 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD'
// b)
// É um recurso que permite acessar o conteúdo de um objeto
*/

/*Exercicio 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//Respostas:
// a) false
//    undefined
// b) Não existe um valor declarado parra "altura"
*/

/*Exercicio 1
// a)
const pessoas = {
    nome: "Juvita",
    apelidos: ["Garoto", "Mulek", "Juvi"]
}
function pegarNomes (objeto)  {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]} `)
}
console.log(pegarNomes(pessoas))


// b)
const novosApelidos = {...pessoas , apelidos: ["Juju", "Vita", "Garoto"]}
console.log(pegarNomes(novosApelidos))
*/

/*Exercicio 2
// a)
const pessoa1 = {
    nome: "Caio", 
    idade: 23, 
    profissao: "Programador"
}

const pessoa2 = {
    nome: "Rodrigo", 
    idade: 35, 
    profissao: "Professor"
}

// b)
function minhaFuncao(pessoa1) {
    return [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
}
console.log(minhaFuncao(pessoa1))
*/

/*Exercicio 3
// a)
const carrinho = []

// b)
const fruta1 = {
    nome: "uva",
    disponibilidade: true
}
const fruta2 = {
    nome: "banana",
    disponibilidade: true
}
const fruta3 = {
    nome: "laranja",
    disponibilidade: true
}

// c)
function frutaNoCarrinho(fruta) {
    return(carrinho.push(fruta))
}
console.log(frutaNoCarrinho(fruta1))
console.log(frutaNoCarrinho(fruta2))
console.log(frutaNoCarrinho(fruta3))
// d)
console.log(carrinho)
*/

//Desafios
// 1)
function perguntaUsuario () {
    const usuario = {
    nome: prompt("Qual o seu nome?"),
    idade: Number(prompt("Qual a sua idade?")),
    profissao: prompt("Qual a sua profissao?")
    }
    console.log(usuario)
    
}
perguntaUsuario()


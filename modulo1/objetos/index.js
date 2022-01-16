//EXERCICÍO DE INTERPRETAÇÃO
//1)
/*
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
*/
//A) Será impresso: Matheus Nachtergaele
//                  Virginia Cavendish
//                  Canal: Globo, horario: 14h

//2)
/*
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
*/
//A)  console.log(cachorro) -   nome: "Juca", 
//	                            idade: 3, 
//	                            raca: "SRD"
//    console.log(gato) -       idade: 3,
//                              raca: "SRD",
//                              nome: "Juba"
//    console.log(tartaruga) -  idade: 3
//                              nome: "Jubo"
//                              raca: "SRD"
// Nesta ultima console.log é colocado replaceAll para substituir "a" por "o".
//B) Ele faz uma copia do objeto. 

//3)
/*
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
*/
//A) Será impresso um False e Undefined.
//B) Não conseguir compreender.

// EXERCICIO DE ESCRITA DE CÓDIGO
//1)
const pessoa = { 
    nome: "Clayton",
    apelidos: ["Garoto", "Bilucador", "Pato"]
}
function nomeApelido(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    
}




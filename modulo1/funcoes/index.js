//INTERPRETAÇÃO
//Exercicio 1

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))  */
//a) Está multiplicando 2x5 e 10x5. Será impresso 10 e 50.
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

(minhaFuncao(2)) (minhaFuncao(10))
//b) informa que não é uma função. */

//Exercicio 2
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */
//a) Depois de inserido o texto, achei que seria transformado em letras minusculas,porem só está informando True caso tenha a palavra cenoura no texto, caso não tenha cenoura no texto, será False.
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) 
*/
//b)
// i.  Eu gosto de cenoura - True
//ii.  CENOURA é bom pra vista - True
//iii. Cenouras crescem na terra - True


//ESCRITA DE CODIGO
//Exercicio 1
//a)
/*
function mensagemSobreMim() {
return textoSMim = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
}

console.log(mensagemSobreMim())

 
 function mudancaDeParam (nome, idade, cidade, souEstudante) {
    
    
console.log(`Eu sou o ${nome}, tenho ${idade}, moro em ${cidade} e sou ${souEstudante}.`)
 }
mudancaDeParam("Anderson", "38","Curitiba", "Labenu")

//b)

function parametro4(nomePessoa, idadePessoa, cidadePessoa, profissao) {

    console.log(`Eu sou ${nomePessoa}, tenho ${idadePessoa}, moro em ${cidadePessoa} e sou ${profissao}.`)
}
parametro4("Laís", (Number("23")), "Rua Guarapari 190", "instrutora")  
*/

//Exercicio 2

//a)
/*
const parametro2 = (numero1, numero2) => {
const soma = (numero1 + numero2)
console.log(soma)

}

parametro2(5, 6)
*/

//b)
/*
const parametro3 = (numero1, numero2) => {
const maiorOuIgual = numero1 >= numero2
console.log(maiorOuIgual)

}
parametro3(15, 5)
parametro3(5, 6)
*/

//c)
/*
const parametro4 = numero1  => {
const parOuImpar = numero1 % 2
console.log(parOuImpar === 0)
}
parametro4(16)
parametro4(13)
*/

//d)
/*
const parametro5 = texto  => {
const fraseMais = mensagem.toLocaleUpperCase

    console.log(texto)
}
const mensagem = prompt("Escreva um texto")
Console.log(mensagem.length)
*/

//Exercicio 3


/*
function soma(numero1, numero2) {
    console.log(numero1 + numero2)
} 

function diferenca(numero1, numero2) {
    console.log(numero1 - numero2)
}

function multiplicacao(numero1, numero2) {
    console.log(numero1 * numero2)
}

function divisao(numero1, numero2) {
    console.log(numero1 / numero2)
}

numero1 = Number(prompt("Digite um numero"))
numero2 = Number(prompt("Digite outro numero"))


console.log(`Numeros informados:  ${numero1} e ${numero2}`)
console.log(`Soma:  ${soma(numero1, numero2)}`)
console.log(`Diferença:  ${diferenca(numero1, numero2)}`)
console.log(`Multiplicação:  ${multiplicacao(numero1, numero2)}`)
console.log(`Divisão:  ${divisao(numero1, numero2)}`)
*/


function programa () {
    const lado1 = prompt("Digite o valor A: ");
    const lado2 = prompt("Digite o valor B: ");
    const lado3 = prompt("Digite o valor C: ");

    if (lado1<lado2+lado3) {
        if (lado2<lado1+lado3) {
            if (lado3<lado1+lado2) {
                alert("O triângulo existe.");
            }
            else
                alert("O triângulo não existe.");
        }
        else
            alert("O triângulo não existe.");
    }
    else
     alert("O triângulo não existe.");
}

console.log (programa)
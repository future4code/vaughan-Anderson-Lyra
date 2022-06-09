//INTERPRETAÇÃO
//1)
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
//Apos o loop a variável chega até o numero 6 e o "i" até 4, somando os dos ficaria 10.
*/
//2)
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/
//a) Será exibido a sequencia (19,21,23,25,27,30)
//b)

//3)
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
// Ele vai somando um apos o outro, exemplo: * + 1 = "*", * + 1 = "**", ** + 1 = "***", *** + 1 = "****".

//EXERCICIO ESCRITA DE CÓDIGO

//1)
/*
let quantidadeBichoEstimacao = Number(prompt("Quantos bichinhos de estimação vc tem?"))
let bichos = []
    if (quantidadeBichoEstimacao <= 0) {
        console.log("Que pena! Você precisa de um pet!")
    }   else if(quantidadeBichoEstimacao > 0) {

    }   for(let nomeDosBichos = " "; nomeDosBichos < quantidadeBichoEstimacao; nomeDosBichos++ ) {
            numDosBichos = prompt("Quais os nomes dos animais?")
            bichos.push(numDosBichos)
    }
    console.log("Os nomes dos animais são:", bichos)
*/
//a), b) e c)

//2)
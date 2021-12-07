//EXERCICIO INTERPRETAÇÃO
//1)
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//a) Ele pede para o usuário digitar um numero e o resultado será
//   será exibido "Passou no teste" se ele digitar numero par e a outro
//   mensagem será exibida se o numero for impar.

//b) Para numeros Pares.
//c) Para numeros Impares.

//2)
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
//a)Serve para informar o preço, apos a escolha da fruta.
//b)Será impresso "O preço da fruta Maçã é R$ 2.25" Porque tem o mesmo
//  nome da string.
//c)Ele retornaria o "default" com o valor de R$ 5.

//3)
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/12
//a) Pedindo para o usuário inserir um numero.
//b) Quando digitado o numero 10, será exibido "Esse número passou no teste".
//   quando digitado o -10, não será exibido nunhuma mensagem
//c)

//EXERCICIO DE ESCRITA DE C'ODIGO
//1)
/*
let idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18) {
console.log("Pode dirigir")
} else  {
  console.log("Você não pode dirigir")
}
*/
//a), b) e c) respondidas.

//2)
/*
let turnoAluno = prompt("Digite o turno que estuda em: M (matutino) ou V (Vespertino) ou N (Noturno)")
  function horarioEstudo(turno) {
    if(turno === `M`) {
    console.log("Bom dia!")
  } else if(turno === `V`) {
    console.log("Boa tarde!")
  } else if(turno === `N`) {
      console.log("Boa noite!")
  }
  }
  horarioEstudo(turnoAluno)
*/

//3)
/*
const turnoAluno = prompt("Digite o turno que estuda em: M (matutino) ou V (Vespertino) ou N (Noturno)")
switch(turnoAluno) {
  case `M`:
    console.log("Bom dia!")
    BREAK
  case `V`:
    console.log("Boa tarde!")
    BREAK
  case `N`:
    console.log("Boa noite!")
    break
}
*/

//4)













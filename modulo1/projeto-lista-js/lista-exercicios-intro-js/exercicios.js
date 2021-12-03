// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura retangulo"))
  const largura = Number(prompt("Digite a largura retangulo"))
calculaAreaRetangulo = altura * largura

  console.log(calculaAreaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Escreva o ano atual."))
  const anoNascimento = Number(prompt("Escreva o ano de nascimento."))
  
console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  const imc = Number(peso / (altura * altura))
  return(imc.toFixed(1))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Informe uma cor.")
  const cor2 = prompt("Informe a segunda cor.")
  const cor3 = prompt("Informe a terceira cor.")

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  

  console.log(string.toUpperCase())

}
console.log

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 const valorMedio = custo / valorIngresso

 return valorMedio
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1 === string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
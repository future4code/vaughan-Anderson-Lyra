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
  const altura = Number(prompt("Escreva a altura."))
  const largura = Number(prompt("Escreva a largura."))
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Escreva o ano atual."))
  const anoNascimento = Number(prompt("Escreva seu ano de nascimento."))
  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura*altura)
  return imc.toFixed(2)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")
  
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Escreva a cor 1")
  const cor2 = prompt("Escreva a cor 2")
  const cor3 = prompt("Escreva a cor 3")

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return (string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantIngresso = (custo/valorIngresso)
  return (quantIngresso)
  
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return (array[array.length -1])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length -1]

  array[0] = ultimo
  array[array.length -1] = primeiro

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Escreva o ano atual."))
  const anoNascimento = Number(prompt("Escreva seu ano de nascimento."))
  const anoCarteiraEmit = Number(prompt("Escreva o ano de emissão da Carteira."))
    
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoCarteiraEmit

    const opcao1 = idade <= 20 && tempoCarteira >= 5
    const opcao2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const opcao3 = idade > 50 && tempoCarteira >= 15

    console.log (opcao1 || opcao2 || opcao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    const opcao1 = ano % 400 === 0
    const opcao2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return opcao1 || opcao2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt("Você tem mais de 18 anos?")
  const esinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui ensino médio completo?")

  console.log(maiorIdade === "sim" && esinoMedio === "sim" && disponibilidade === "sim")    
}
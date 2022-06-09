// EXERCÍCIO DE INTERPRETAÇÃO
//Exercicio 1
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //Será impresso False.

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // Será impresso False

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) // Será impresso True

console.log("d. ", typeof resultado) // Será impresso uma booleano */


// Exercicio 2
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt ("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)  */
// Será impresso duas Strings e não poderá realizar a soma, precisando colocar o comando Number antes de cada prompt. 


//Exercicio 3
/*
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt ("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)  */


// EXERCÍCIO DE ESCRITA DE CÓDIGO
// Exercicio 1
/*
let idade = Number(prompt("Qual a sua idade?"));
let idadeAgoAga = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"));

resultado = idade > idadeAgoAga;


console.log("Sua idade é maior do que a do seu melhor amigo?");
console.log("Resposta ", resultado);

diferencaIdade = idade - idadeAgoAga;

console.log("Diferença de idade ", diferencaIdade);  */


// Exercicio 2
/*
let numeroPar = Number(prompt("Insira um número par."));
let restDiv = 2;
let resultado = numeroPar % restDiv;  

console.log(resultado); */
//Resposta c) O resultado sempre será 0.
//Resposta d) O resultado sempre será 1.


//Exercicio 3
/*
let nascimento = Number(prompt("Qual o ano de Nascimento?"));
let resultado1 = 2021 - nascimento;

console.log("Você tem " , resultado1, "anos.");

let resultadoMes = (resultado1*12);
console.log("Sua idade em Meses são ",resultadoMes);

let resultadoDia = (resultado1*12)*30;
console.log("Sua idade em Dias são ",resultadoDia);

let resultadoHoras = ((resultado1*12)*30)*60;
console.log("Sua idade em Horas são ",resultadoHoras); */


//Exercicio 4

let numero1 = Number(prompt("Escolha dois numeros, digite o primeiro numero."));
let numero2 = Number(prompt("Digite o segundo numero?"));

numeroMaiorSeg =  numero1 > numero2;
numeroIgualSeg = numero1 === numero2;
numeroDivSeg = numero1 % numero2 === 0;
numeroSegDiv = !numeroDivSeg;

console.log("O primeiro numero é maior que segundo?", numeroMaiorSeg);
console.log("O primeiro numero é igual ao segundo?", numeroIgualSeg);
console.log("O primeiro numero é divisível pelo segundo?", numeroDivSeg);
console.log("O segundo numero é divisível pelo primeiro?", numeroSegDiv);


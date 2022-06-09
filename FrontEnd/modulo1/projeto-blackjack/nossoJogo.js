/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const mensagem = ("Boas vindas ao jogo de Blackjack!")
 console.log(mensagem)

 const novaRodada = confirm("Quer iniciar uma nova rodada")

 if (novaRodada) { 
    let cartasUsuario = comprarCarta()
    let cartasUsuario1 = comprarCarta()
    let cartasComputador = comprarCarta()
    let cartasComputador1 = comprarCarta()
    
    let pontosJogador = cartasUsuario.valor + cartasUsuario1.valor
    let pontosComputador = cartasComputador.valor + cartasComputador1.valor

    console.log(`Usuário - cartas: ${cartasUsuario.texto} ${cartasUsuario1.texto} - ${pontosJogador}`)
    console.log(`Computador - cartas: ${cartasComputador.texto} ${cartasComputador1.texto} - ${pontosComputador}`)
 

 if (pontosJogador > pontosComputador) {
    console.log("O usuário ganhou!")
 } else if (pontosComputador > pontosJogador) {
    console.log("O computador ganhou!")
 } else if (pontosJogador === pontosComputador) {
    console.log("Empate!")
 }
 } else {console.log("O jogo acabou")}



 



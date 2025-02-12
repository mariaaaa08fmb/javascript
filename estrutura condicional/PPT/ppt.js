// Jogo Pedra, Papel e Tesoura

const escolhaJogador = prompt("EScolha pedra, papel ou tesoura: ")
// solicita que o usuário informe qual ele quer

const escolhaPC = [ "Pedra", "Papel", "Tesoura"]
[ Math.floor(Math.random ()* 3 )]

//Gera uma escolha aleatoria para o computador
// Criamos um array com as opções e usamos o radom para escolher uma de forma aleatoria

alert('Você escolheu $ {EscolhaJogador}')
alert('O computador escolheu ${EscolhaPC}')

// mostrando qual foi a nossa escolha e qual foi a escolha do computador

//Compara se a nossa escolha foi igual a do computador

if (EscolhaJpgador == EscolhaPC) {
    alert("Empate")
} else if (EscolhaJogador == "pedra" && EscolhaPC == "papel") {
    alert ("Você venceu")
} else if (EscolhaJogador == "papel" && EscolhaPC == "pedra") {
    alert ("Você venceu")    
} else {
    alert ("Você perdeu")
}
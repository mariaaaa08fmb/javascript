// Jogo Pedra, Papel e Tesoura
let placarJogador = 0
let placarPc = 0

let rodadas = Number(prompt("Quantas vezes você deseja jogar?"))


for (let i = 0; i < rodadas; i++) {

    const EscolhaJogador = prompt("EScolha pedra, papel ou tesoura: ")
    // solicita que o usuário informe qual ele quer

    const EscolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]

    //Gera uma escolha aleatoria para o computador
    // Criamos um array com as opções e usamos o radom para escolher uma de forma aleatoria

    alert(`Você escolheu ${EscolhaJogador}`)
    alert(`O computador escolheu ${EscolhaPC}`)

    // mostrando qual foi a nossa escolha e qual foi a escolha do computador

    //Compara se a nossa escolha foi igual a do computador

    if (EscolhaJogador == EscolhaPC) {
        alert("Empate")
    } else if (EscolhaJogador == "pedra" && EscolhaPC == "papel") {
        alert("Você venceu")
        placarJogador++
    } else if (EscolhaJogador == "tesoura" && EscolhaPC == "papel") {
        alert("Você venceu")
        placarJogador++
    } else if (EscolhaJogador == "papel" && EscolhaPC == "pedra") {
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
    }
    console.log("Placar Jogador; ", placarJogador)
    console.log("Placar Computador; ", placarPc)

}     

alert(`Fim de jogo! Placar final: Jogador${placarJogador}x ${placarPc} Computador`)
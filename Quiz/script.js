//cada pergunta tem: uma pergunta, as opções e, alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "A Conferência de Berlim (1884-1885) teve como principal consequência:",
        opcoes: [
            "A independência das colônias africanas",
            "O fim da escravidão no continente africano",
            "A partilha da África entre potências europeias",
            "A criação da Liga das Nações"
        ],
        correta: 2
    },
    {
        pergunta: "Sobre a Revolução Francesa, é correto afirmar que:",
        opcoes: [
            "Consolidou o absolutismo monárquico na França",
            "Teve como lema 'Paz, Terra e Pão'",
            "Aboliu os privilégios da nobreza e do clero",
            "Foi liderada exclusivamente pela aristocracia"
        ],
        correta: 2
    },
    {
        pergunta: "O termo 'Globalização' refere-se:",
        opcoes: [
            "À divisão do mundo em blocos econômicos fechados",
            "Ao isolamento das economias nacionais",
            "Ao aumento da interdependência econômica, política e cultural entre países",
            "Ao fim do capitalismo em escala mundial"
        ],
        correta: 2
    },
    {
        pergunta: "Segundo Karl Marx, a história da humanidade é marcada por:",
        opcoes: [
            "Conflitos religiosos",
            "Conflitos raciais",
            "Luta de classes",
            "Evolução pacífica das sociedades"
        ],
        correta: 2
    },
    {
        pergunta: "Qual pensador iluminista defendia a separação dos poderes?",
        opcoes: [
            "Rousseau",
            "Voltaire",
            "Montesquieu",
            "Hobbes"
        ],
        correta: 2
    },
    {
        pergunta: "A Guerra Fria foi caracterizada por:",
        opcoes: [
            "Conflito direto entre EUA e URSS",
            "Corrida armamentista e ideológica entre capitalismo e socialismo",
            "Acordo de paz entre países do Ocidente e Oriente",
            "Domínio militar da China sobre os EUA"
        ],
        correta: 1
    },
    {
        pergunta: "O movimento dos trabalhadores urbanos por melhores condições no século XIX resultou em:",
        opcoes: [
            "Abolição do feudalismo",
            "Reformas agrárias",
            "Criação de leis trabalhistas e sindicatos",
            "Expansão do sistema escravocrata"
        ],
        correta: 2
    },
    {
        pergunta: "A Ditadura Militar no Brasil (1964-1985) foi marcada por:",
        opcoes: [
            "Plena liberdade de imprensa",
            "Desenvolvimento democrático das instituições",
            "Censura, repressão política e perseguições",
            "Neutralidade nas relações exteriores"
        ],
        correta: 2
    },
    {
        pergunta: "O conceito de etnocentrismo se refere à:",
        opcoes: [
            "Valorização da diversidade cultural",
            "Visão de que uma cultura é superior às demais",
            "Busca pela igualdade entre povos",
            "Imposição de leis internacionais sobre culturas"
        ],
        correta: 1
    },
    {
        pergunta: "A urbanização no Brasil, especialmente no século XX, foi caracterizada por:",
        opcoes: [
            "Distribuição equitativa de renda e serviços",
            "Planejamento urbano eficiente",
            "Crescimento acelerado e desordenado das cidades",
            "Êxodo urbano para o campo"
        ],
        correta: 2
    }
]
//variáveis para controlar o quiz
let perguntaAtual = 0 //qual pergunta está sendo mostrada
let pontuacao = 0 //quantidade de acertos
let erros = 0 //quantidade de erros
let opcaoSelecionada = null //qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document. getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById ("erros")
const acertos = document.getElementById ("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}  
// função que mostra a pergunta atual
function mostrarPergunta() {
//Pega a pergunta atual
const perguntaAtualObj = perguntas[perguntaAtual]
// Mostra o texto da pergunta
pergunta.textContent = perguntaAtualObj.pergunta
opcoes.textContent = "" //limpa as opcoes anteriores

// Cria um botão para cada opção de resposta
perguntaAtualObj.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement ("button")
    botao.textContent = opcao
    botao.classList.add("opcao")
    botao.addEventListener("click", () => selecionarOpcao(indice))
    opcoes.appendChild(botao)
 })
opcaoSelecionada = null
botaoProxima.disabled = true //desabilita o botão de proxima
}
// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
opcaoSelecionada = indice
//atualiza o visual da opção selecionada
const opcoes = document.querySelectorAll(".opcao")
opcoes.forEach((opcao, i) => {
opcao.classList.toggle("selecionada", i == indice)
})
 botaoProxima.disabled = false //habilita o botao de proxima
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal. classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
// Verifica se a resposta está correta
if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
pontuacao++
} else {
erros++
}
atualizarPlacar()

perguntaAtual++
if(perguntaAtual < perguntas.length) {
    mostrarPergunta()
    } else {
    mostrarPontuacao()
}
 })
//botao para reiniciar o quiz
    botaoReiniciar.addEventListener("click", () => {
        // Reseta todas as variáveis
        perguntaAtual = 0
        pontuacao = 0
        erros = 0
   //o quiz aparece e a pontuação final some     
        quiz.classList.remove("esconder")
        pontuacaoFinal. classList.add("esconder")
         atualizarPlacar()
         mostrarPergunta()
})

mostrarPergunta()
const listaProdutos = [
    {id:1, nome: "Livro, o lado feio do amor", preco: 45, imagem:"img/livro1.jpg"},
    {id:2, nome: "Livro, É assim que começa", preco: 47, imagem:"img/livro2.webp"},
    {id:3, nome: "Livro, É assim que acaba", preco: 55, imagem:"img/livro3.webp"},
    {id:4, nome: "Livro, Novembro 9", preco: 35, imagem:"img/livro4.webp"},
]
//pegando os elementos do html
const containerProdutos = document.getElementById("produtos")
const barraPesquisa = document.getElementById("barraPesquisa")
const listaCarrinho = document.getElementById("listaCarrinho")
const botaoCarrinho = document.getElementById("botaoCarrinho")
const botaoLoja = document.getElementById("botaoLoja")
const divCarrinho = document.getElementById("carrinho")
const totalCarrinho = document.getElementById("totalCarrinho")

//carrinho de compras 
let carrinho = [] 
function mostrarProdutos(lista) { //função que mostra os produtos
    containerProdutos.innerHTML = " "
    lista.forEach(produto => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button> 
        `
        containerProdutos.appendChild(card)
    })
}
//adicionar ao carrinho
function adicionarCarrinho(idProduto) {
const produtoSelecionado = listaProdutos.find(prod => prod.id ===
    idProduto)
const itemExistente = carrinho.find(item => item.id === idProduto)
    if(itemExistente) {
    itemExistente.quantidade += 1
} else {
    carrinho.push({...produtoSelecionado, quantidade: 1})
    }
atualizarCarrinho()
}
//diminuir a quantidade no carrinho
function diminuirQuantidade(idProduto) {
    const itemExistente = carrinho.find(item => item.id === idProduto)
    if(itemExistente) {
        itemExistente.quantidade -= 1
        if(itemExistente.quantidade <= 0) {
            removerDoCarrinho(idProduto)
            return
        }
        atualizarCarrinho()
    }
}
//remover do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto)
    atualizarCarrinho()
}
//atualizar carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = ""
    carrinho.forEach(item => {
        const li = document.createElement("li")
        li.innerHTML = `
        <span>${item.nome}</span>
         <span>${item.quantidade}</span>
          <span>${item.preco * item.quantidade},00</span>
          <span>
          <button class="aumentar" onclick="adicionarCarrinho(${item.id})">+</button>
          <button class="diminuir" onclick="diminuirQuantidade(${item.id})">-</button>
           <button class="remover" onclick="removerDoCarrinho(${item.id})">Remover</button>
           </span>
        `
        listaCarrinho.appendChild(li)
    })
    calcularTotal()
}
//calcular total a pagar
function calcularTotal() {
    let total = 0
    carrinho.forEach(item => {
        total += item.preco * item.quantidade
    })
    totalCarrinho.innerHTML = `<strong>Total: R$ ${total},00</strong>`
}
    
//barra de pesquisa
barraPesquisa.addEventListener("input", () => {
    const textoPesquisa = barraPesquisa.value.toLowerCase()
    const produtosFiltrados = listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(textoPesquisa)
    )
    mostrarProdutos(produtosFiltrados)
})

// Botao Ver Carrinho
botaoCarrinho.addEventListener("click", () => {
    containerProdutos.style.display = "none"
    barraPesquisa.style.display = "none"
    divCarrinho.style.display = "block"
    botaoCarrinho.style.display = "none"
    botaoLoja.style.display = "inline"
})
 // Botão voltar para a loja
    botaoLoja.addEventListener("click", () => {
    containerProdutos.style.display = "flex"
    barraPesquisa.style.display = "block"
    divCarrinho.style.display = "none"
    botaoCarrinho.style.display = "inline"
    botaoLoja.style.display = "none"
})
    
    // Inicialização
    mostrarProdutos (listaProdutos)
    
  
    
    
    
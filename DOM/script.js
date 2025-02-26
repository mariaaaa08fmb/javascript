let titulo = document.getElementById("titulo")
console.log(titulo.innerText)

//--------------------------------------------

let texto = document.getElementById("texto")
texto.innerText = "texto alterado"
texto.style.color = "blue"

//--------------------------------------------

let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert("botao clicando")
})

//--------------------------------------------

let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function() {
    duplo.style.backgroundColor = "red"
})
    
//---------------------------------------------

let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
})

//----------------lista 13---------------------
//ex 1
let texto1 = document.getElementById("texto")
let botao1 = document.getElementById("botao")
botao1.addEventListener("click", function() {
texto1.style.color = "blue"
})

//ex 2
let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function() {
    botao2.style.backgroundColor = "pink"
    })

//ex 3
let duplo1 = document.getElementById("duplo")
duplo1.addEventListener("dblclick", function() {
duplo1.style.fontSize = "20px"
})

// 4
let passe1 = document.getElementById("passe")
passe1.addEventListener("mouseover", function() {
    passe1.style.backgroundColor = "blue"
})
passe1.addEventListener("mouseout", function() {
    passe1.style.backgroundColor = " lightgrey"
})

//ex 5
function aumentarImagem() {
    let img = document.getElementById("imagem");
    img.style.width = "200px";
    img.style.height = "200px";
}
//ex 6
function arredondarImagem() {
    document.getElementById("imagemRedonda").style.borderRadius = "50%";
}
//ex 7
function alterarParagrafo1() {
    let p = document.getElementById("paragrafo1");
    p.style.backgroundColor = "yellow";
    p.style.color = "blue";
}

function alterarParagrafo2() {
    let p = document.getElementById("paragrafo2");
    p.style.backgroundColor = "green";
    p.style.color = "white";
    p.style.fontSize = "20px";
}

function alterarParagrafo3() {
    let p = document.getElementById("paragrafo3");
    p.style.backgroundColor = "purple";
    p.style.color = "white";
    p.style.fontSize = "20px";
    p.style.borderRadius = "10px";
}
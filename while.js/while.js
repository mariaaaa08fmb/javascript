let contador = 0

while(contador <= 5) {
    console.log(contador)
    contador++
}
/////////////////////////////////

let controle = 5
while (controle >= 0) {
    console.log(controle)
    controle--
}
////////////////////////////////

console.log ("terceiro exemplo")
let numero = 3
let multiplicador = 1
while (multiplicador <=4) {
    let resultado = numero * multiplicador
    console.log(resultado)
    multiplicador += 1
}
////////////////////////////////

let palavra = prompt ("digite a palavra")
while ( palavra != "oi") {
    palavra = prompt ("tente novamente: ")
    if(palavra == "oi") {
        console.log ("acertou")
    }
}
////////////////////////////////

//lista exercicio while//

//ex1
let contador1 = 1
while (contador <=19) {
    console.log(contador)
    contador++
}

 //ex2
 let tabuada = prompt("Digite um número: ")
let multiplicador2 = 1
while (multiplicador <= 10) {
    let resultado = tabuada * multiplicador
     console.log(tabuada, "x", multiplicador, "=", resultado) 
    multiplicador += 1 
}

//ex3
let controle3 = 10
while(controle >= 1) { 
    console.log(controle) 
     controle-- 
}

//ex4
let senha = prompt("Digite a senha")
while (senha  != 12345) {
    senha = prompt("Tente novamente: ")
    if (senha == 12345) {
        console.log("Acertou")
    }
}

//ex5
let contador2 = 50
while(contador2 <= 100) { 
    console.log(contador2) 
     contador2++ 
}

//ex6
let controle2 = 0
while(controle2 <= 100) { 
    console.log(controle2) 
     controle2 += 5
}

//ex7
let repeticao = 0
while (repeticao < 5) {
  console.log("Eu gosto de JavaScript")
  repeticao++
}

//ex8

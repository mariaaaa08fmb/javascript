let contador = 0
let contador1 = 0
while(contador !=5) {

    console.log ("while:", contador)
    contador++
}
do {
    console.log("do while", contador1)
    contador1++
} while (contador1 !=5)

    //segundo exemplo
    let numero = 5
    do { 
        console.log(numero)
        numero -= 2
    } while (contador >= 0)

//terceiro exemplo
let idade = prompt("qual a sua idade?")
do {
    if (idade > 0) {
        console.log ("idade valida")
    }
    else {
        console.log ("idade invalida")
    }
    idade = prompt ("qual a sua idade?")
} while (idade >=0)
    
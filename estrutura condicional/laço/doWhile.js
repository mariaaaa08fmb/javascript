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


    //////////////////////////////////////
//lista 8 
//ex 1
 let contador2 = 1
 while (contador2 != 21) {
    console.log("do while:", contador2)
    contador2++
 }
//ex 2

 let usuario= prompt("Deseja continuar?")
    do {
        if (usuario != "s") {
 }
        else { 
            usuario = prompt("Deseja continuar?")
        }
    } while (usuario != "n")

//ex 3
let usuario1= prompt("Escolha um número")
let numero1 = 0
do {
    console.log(numero1)
    numero1+=1
}
while(numero1 <= usuario1)

   //ex 4
   let contador3 = 1
   while(contador3 != 32)
    {
        console.log(contador3)
        contador3+=2
}

//ex 5
let repeticao = 0
do { let numerica = prompt("Digite cinco números")
    if(numerica > 0) {
        console.log("Número positivo")
    }
    else if (numerica < 0) { 
        console.log("Número negativo")
    }
    else {
    console.log("O número é zero")
    }
    repeticao++
}
while (repeticao < 5)

//6 
let continuar = "s";
while (continuar === "s") {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    console.log("A soma dos números é: " + (num1 + num2));
    continuar = prompt("Deseja fazer outra conta? (s/n)");
}
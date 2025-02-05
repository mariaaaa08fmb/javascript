let idade = 20
let tituloEleitor = true

if (idade >= 18 && tituloEleitor == true) {
    console.log ("pode votar")
} else{
    console.log (" Não pode votar")
}

// Verifica se o número está dentro do intervalo

let numero = 15
if (numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20")    
} else {
    console.log("O número está fora do intervalo")
}

// compra com desconto

let valor = 150
let clienteVip = false

if (valor >= 100 || clienteVip == True) {
    console.log ("Você ganhou frete grátis")
} else {
    console.log("Tem que pagar frete")
}

// Número no intervalo

let num = 10
if (num >= 5 || num <=20){
    console.log ("funcionou") 
} else {
    console.log ("Não funciounou")
}

//ex1
let idades = 18
let carteiraMotorista = true

if (idades >= 17 && carteiraMotorista == true) {
    console.log ("Você pode dirigir")
} else{
    console.log (" Você não pode dirigir")
}

// ex2
 let anos = Number(prompt("Quantos anos de empresa?"))
 let clienteVip1 = false

 if(anos >= 5 || clienteVip1 == true) {
    console.log ("Você está elegível para a promoção")
 } else {
    console.log ("Você não está elegível para a promoção")
 }

 //ex3
   
 let idade2 = Number(prompt("Quantos anos você tem?"))

 if (idade2 >= 18 && idade2 <= 30) {
    console.log("Você pode entrar no evento")
 } else{
    console.log("Você não pode entrar no evento")
 }

 //ex4

 let idadee = Number(prompt("Quantos anos você tem?"))
 let vaga = false

 if (idadee >= 21 || vvaga == true){
    console.log ("Você foi aceito para a vaga")
 } else {
    console.log (" Você não foi aceito para a vaga")
 }

 //ex5

  let nome = Number (prompt("Qual é o seu nome"))
  let login = false
  let senha = false
  if (nome == "admin" && senha == 1234){
    console.log("Login bem-sucedido")
  } else{
    console.log ("Senha ou usuario estão incorretos")
  }

  //ex6
 let numero1 = Number (prompt("Digite um número"))

 if (numero1 >= 10 && numero1 <=20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
 } else if (numero1 >= 30 && numero1 <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
 } else {
    console.log(" O número não se encontra em nenhum dos intervalos!")
 }

 //ex7

 let numero2 = Number(prompt("Digite um número"))
if (numero2 <= 10 || numero2 >= 100 && numero2 == 50){
    console.log ("Esse número é aceito")
}else {
    console.log("O número não é aceito ")
}
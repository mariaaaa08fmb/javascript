// OO -> script.js
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log('olá, meu nome é ${this.nome} e tenho ${this.idade} anos' )
    }
}

const aluno1 = new Pessoa("Maria", 17)
//aluno1.apresentar();

class Carro {
    constructor(marca,modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirInfo() {
        console.log(Carro: ${this.marca} ${this.modelo} ${this.ano})
    }
}
const meuCarro = new Carro("Hyundai", "HB20", 2023)
meuCarro.exibirInfo()
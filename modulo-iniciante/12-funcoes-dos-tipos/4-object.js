const pessoa = {
    nome: 'Maria',
    idade: '19',
    apresentar () {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos!`)
    }
}

pessoa.apresentar()

pessoa.nome = "João"
pessoa.idade = 23

pessoa.apresentar()
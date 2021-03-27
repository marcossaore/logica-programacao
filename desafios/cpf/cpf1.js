const cpf = '7640935374'

const obterNoveDigitosIniciaisCPF = cpf.substr(0, 9)

console.log('cpf 9 digitos ', obterNoveDigitosIniciaisCPF)

const vetorNoveDigitosCPF = obterNoveDigitosIniciaisCPF.split('')

console.log('vetor digitos ', vetorNoveDigitosCPF)

const tamanhoVetor = vetorNoveDigitosCPF.length

let contador = 10 // para fazer as operacoes do cpf

let somaPrimeiroDigito = 0

for (let index = 0; index < tamanhoVetor; index++) {
    console.log(vetorNoveDigitosCPF[index])
    const digito = vetorNoveDigitosCPF[index]
    somaPrimeiroDigito += (digito * contador)
    contador--
}

somaPrimeiroDigito = ( somaPrimeiroDigito  * 10) % 11

const primeiroDigito = somaPrimeiroDigito == 10 ? 0 : somaPrimeiroDigito

console.log('primeiro digito ', primeiroDigito)

const obterDezDigitosIniciaisCPF = cpf.substr(0, 10)

const vetorDezDigitosCPF = obterDezDigitosIniciaisCPF.split('')

contador = 11
let somaSegundoDigito = 0
for (const digito of vetorDezDigitosCPF) {
    somaSegundoDigito += (digito * contador)
    contador--
}

somaSegundoDigito = (somaSegundoDigito * 10) % 11

const segundoDigito = somaSegundoDigito == 10 ? 0 : somaSegundoDigito

console.log('segundoDigito ', segundoDigito)

const cpfGeradoDaValidacao = obterNoveDigitosIniciaisCPF + primeiroDigito + segundoDigito

console.log('cpfGeradoDaValidacao ', cpfGeradoDaValidacao)


if (cpf == cpfGeradoDaValidacao) {
    console.log('sim é o mesmo!')
}else {
    console.log('não é o mesmo!')
}
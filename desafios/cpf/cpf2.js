const cpf = '34595053677'
const cpfValidado = gerarCpfDeValidacao(cpf)

console.log(cpf === cpfValidado ? 'cpf valido!' : 'cpf inválido')

function gerarCpfDeValidacao (cpf) {
    const primeiroDigito = gerarPrimeiroDigitoValidacaoCpf(cpf)
    const segundoDigito = gerarSegundoDigitoValidacaoCpf(cpf)
    const novoCpf = cpf.substr(0, 9) + primeiroDigito + segundoDigito
    return novoCpf
}

function gerarPrimeiroDigitoValidacaoCpf (cpf) {
    const contadorInicial = 10
    const noveDigitosCpf = cpf.substr(0, 9)
    const soma = algoCpf(contadorInicial, noveDigitosCpf)
    return soma
}

function gerarSegundoDigitoValidacaoCpf (cpf) {
    const contadorInicial = 11
    const dezDigitosCpf = cpf.substr(0, 10)
    const soma = algoCpf(contadorInicial, dezDigitosCpf)
    return soma
}

function algoCpf (contador = 10, vetorCpf) {
    let soma = 0
    for (const digito of vetorCpf) {
        soma += (digito * contador)
        contador--
    }
    soma = (soma * 10) % 11
    return soma == 10 ? 0 : soma
}
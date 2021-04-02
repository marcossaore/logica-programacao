const notaProva1 = 5.0
const notaProva2 = 10.0
const notaProva3 = 10.0
const notaProva4 = Number('3.74')

console.log(Number.isInteger(notaProva1))
console.log(Number.isInteger(notaProva4))

console.log(Number.isFinite(notaProva4 / 0))


const media = (notaProva1 + notaProva2 + notaProva3 + notaProva4) / 4

console.log('Valor media ', media)
console.log('Valor media ', media.toFixed(2))

if (media >= 7 ) {
    console.log('Você foi aprovado!')
}else {
    console.log('Você foi reprovado!')
}
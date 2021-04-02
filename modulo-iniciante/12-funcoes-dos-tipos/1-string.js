const frase = 'Pedro foi para a aula 3 vezes na semana'

console.log(frase.charAt(4))
console.log(frase.charAt(8))

console.log(frase.charCodeAt(4))
console.log(frase.charCodeAt(8))

console.log(frase.indexOf('f'))
console.log(frase.indexOf(3))

const cpf = '09409667314'

console.log(cpf.substring(1))
console.log(cpf.substring(0, 3))
console.log(cpf.substring(0, cpf.length - 2))

console.log('Repetindo!!! '.repeat(3))

const novaFrase = frase.replace('Pedro', '')

console.log('Gustavo'.concat(novaFrase).concat('!'))

console.log('Ana, Maria, Joana'.split(','))

let nomes = 'Ana, Maria, Joana'

nomes = nomes.split(',')

const fraseComNomes = nomes.map((nome) => {
    let novaFrase = frase.replace('Pedro', nome)
    const random = Math.floor(Math.random() * 5) + 1
    novaFrase = novaFrase.replace(3, random)
    return novaFrase
})

console.log(fraseComNomes)
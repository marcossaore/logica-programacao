const valores = [
    17.7,
    9.9,
    1.3,
    5.2
]

console.log(valores[1], valores[3], valores[4])

valores[4] = 20

console.log(valores[4])

valores[9] = 9

console.log(valores)

console.log(valores.length)

valores.push({age: 3} , false, null, 'testing')

console.log(valores)

valores.pop()

console.log(valores)

delete valores[4]

console.log(valores)
console.log(typeof valores)
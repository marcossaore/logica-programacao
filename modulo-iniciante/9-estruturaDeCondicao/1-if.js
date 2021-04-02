const numero = null || 0 || '' || 3

if (numero >= 3) {
    console.log(numero, ' é maior ou igual a = ', numero)
} 

if (numero) {
    console.log('numero é uma variável que possui valor = ', numero)
}else {
    console.log('variavel nula')
}

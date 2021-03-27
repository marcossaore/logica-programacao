const nome = 'Monica Argelina Pereira' 
const idade = 20 
const temNamorado = false

let namora = ''

if (temNamorado) {
    namora = 'está namorando'
}else {
    namora = 'não está namorando'
}

// concatenando com o símbolo +
let sobreApessoa = nome + ' tem ' + idade +  ' anos e ' + namora + '!'
console.log('concatenando com "+":  ', sobreApessoa)

// concatenando com template strinf +
sobreApessoa = `${nome} tem ${idade} anos e ${namora}!`
console.log('concatenando com tempate strings (entre crases):  ',sobreApessoa)

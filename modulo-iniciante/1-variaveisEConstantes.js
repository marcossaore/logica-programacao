/**
 * COMENTÁRIO MÚLTIPLAS LINHAS
 */

// COMENTÁRIO UMA LINHA

/*
    SOBRE COMENTÁRIOS:
    comentários são usados para explicar, dar uma dica ou informação util ao desenvolvedor
    que irá ler o código, (ele não é executado pelo programa)
    mas por via de regra prefira bons nomes de variáveis ao invés de comentários desnecessários
*/

/**
 * SOBRE TIPOS PRIMITIVOS
 * https://developer.mozilla.org/pt-BR/docs/Glossary/Primitive
 * https://pt.wikipedia.org/wiki/Tipo_de_dado
 */

const nome = 'Monica Argelina Pereira' // => cadeira de caracteres (string)
const idade = 20 // => inteiro (int ou integer) 
const saldoBancario = 170.35 // real (float)
const temNamorado = false // booleano (boolean)

/*
    SOBRE VARIÁVEIS, CONSTANTES:
    1 - não pode ser declarada tendo como primeiro caracter um digito numérico
        Não pode:
            Ex: 30diasGerarNotaFiscal
        Pode:
            Ex: gerarNotaFiscalApos30Dias
    2 - não pode conter caracteres especias ou qualquer tipo de acentuação:
        Ex: 
            - const tr# = 343
            - const @234 = 2
            - let feijão = 1
            - let açougue = 2
    */

const nomes = [
    'Marcos',
    'Gustavo',
    'Larissa',
    'Amanda'
]

const tamanhoVetorNomes = nomes.length

console.log('tamanhoVetor ', tamanhoVetorNomes)

for (let index = 0; index < tamanhoVetorNomes; index++) {
    const nome = nomes[index]
    console.log(`${index} -  ${nome}`)
}
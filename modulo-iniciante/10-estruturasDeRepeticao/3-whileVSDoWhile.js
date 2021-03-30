let contagemRegressiva = 1

console.log('Execucao while: ')
while (contagemRegressiva >= 1) {
    console.log(`...${contagemRegressiva}`)
    contagemRegressiva--
}
console.log('\n\n')

contagemRegressiva = 0

console.log('Execucao do while: ')
do {
    console.log(`...${contagemRegressiva}`)
    contagemRegressiva--
} while (contagemRegressiva >= 1);


const carroVendido = true
const premioDaLoteria = false

const comprarCasaNaPraia = carroVendido && premioDaLoteria
const comprarCarroNovo = carroVendido || premioDaLoteria

const realizeiAlgumObjetivo = (comprarCasaNaPraia || comprarCarroNovo)

const comemorarTomandoAcai = !!realizeiAlgumObjetivo

console.log('comprarCasaNaPraia', comprarCasaNaPraia)
console.log('comprarCarroNovo', comprarCarroNovo)
console.log('realizeiAlgumObjetivo', realizeiAlgumObjetivo)
console.log('comemorarTomandoAcai', comemorarTomandoAcai)

const valorCasaPraia = 500000
const valorQueTenho = 200000

console.log(`valorCasaPraia: R$ ${valorCasaPraia}  maior que o valor que tenho R$ ${valorQueTenho}`, valorCasaPraia > valorQueTenho)
console.log(`valorCasaPraia: R$ ${valorCasaPraia}  menor que o valor que tenho R$ ${valorQueTenho}`, valorCasaPraia < valorQueTenho)

const valorCarro = 900000
const valorQuetenhoParaCarro = 900000
const valorQuetenhoParaCarroTexto = '900000'

console.log(`valorCarro: R$ ${valorCarro}  é igual a que tenho R$ ${valorQuetenhoParaCarro}`, valorCarro == valorQuetenhoParaCarro)
console.log(`valorCarro: R$ ${valorCarro}  é igual a que tenho R$ ${valorQuetenhoParaCarro}`, valorCarro == valorQuetenhoParaCarroTexto)

console.log(`valorCarro: R$ ${valorCarro}  é igual a que tenho (confere tambem pelo tipo) R$ ${valorQuetenhoParaCarro}`, valorCarro === valorQuetenhoParaCarro)
console.log(`valorCarro: R$ ${valorCarro}  é igual a que tenho (confere tambem pelo tipo) R$ ${valorQuetenhoParaCarro}`, valorCarro === valorQuetenhoParaCarroTexto)

console.log(`valorCarro: R$ ${valorCarro} é diferente do valor que tenho R$ ${valorQuetenhoParaCarro}`, valorCarro != valorQuetenhoParaCarro)
console.log(`valorCarro: R$ ${valorCarro} é diferente do valor que tenho (confere tambem pelo tipo) R$ ${valorQuetenhoParaCarro}`, valorCarro !== valorQuetenhoParaCarro)

const valorComputador = 4000
const valorQuetenhoParaComprar = 4001

console.log(`valorComputador: R$ ${valorComputador}  maior ou igual ao valor que tenho R$ ${valorQuetenhoParaComprar}`, valorComputador >= valorQuetenhoParaComprar)
console.log(`valorComputador: R$ ${valorComputador}  menor ou igual ao valor que tenho R$ ${valorQuetenhoParaComprar}`, valorComputador <= valorQuetenhoParaComprar)

console.log(`valorQuetenhoParaComprar: R$ ${valorQuetenhoParaComprar}  maior ou igual ao valor do computador R$ ${valorQuetenhoParaComprar}`, valorQuetenhoParaComprar >= valorComputador)
console.log(`valorQuetenhoParaComprar: R$ ${valorQuetenhoParaComprar}  menor ou igual ao valor do computador R$ ${valorQuetenhoParaComprar}`, valorQuetenhoParaComprar <= valorComputador)

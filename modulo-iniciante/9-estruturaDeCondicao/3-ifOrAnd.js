let dinheiroNaCarteira = 15.00
const comFome = false
const pertoDaPadaria = true

if (dinheiroNaCarteira >= 10 && comFome && pertoDaPadaria) {
    dinheiroNaCarteira = dinheiroNaCarteira - 10
    console.log('Comprei uma esfiha e uma coca')
}

if (pertoDaPadaria && dinheiroNaCarteira >= 7) {
    dinheiroNaCarteira = dinheiroNaCarteira - 7
    console.log('Comprei um bolo de coco')
}

const comprarEsfiha = dinheiroNaCarteira >= 10 && comFome && pertoDaPadaria
const comprarBoloDeCoco = pertoDaPadaria && dinheiroNaCarteira >= 7

if (comprarEsfiha) {
    dinheiroNaCarteira = dinheiroNaCarteira - 10
    console.log('Comprei uma esfiha e uma coca')
}

if (comprarBoloDeCoco) {
    dinheiroNaCarteira = dinheiroNaCarteira - 7
    console.log('Comprei um bolo de coco')
}

const idade = 50

idade >= 50 && idade <= 80 ? console.log('Tome vacina Coronavac!') : console.log('Ainda não está no seu momento de se vacinar...')

const podeVacinar = idade >= 50 && idade <= 80 ? true : false

console.log(`Sua idade é ${idade} anos, você ${podeVacinar ? 'pode' : 'não pode'} se vacinar!`)
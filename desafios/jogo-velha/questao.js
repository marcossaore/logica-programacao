const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const criarQuestaoERetornarResposta = (questao) => {
    return new Promise((resolve, reject) => {
        rl.question(questao, (resposta) => {
            try {
                return resolve(resposta)
            } catch (erro) {
                return reject(erro)
            }
        })  
    })
}

module.exports = {
    criarQuestaoERetornarResposta
}
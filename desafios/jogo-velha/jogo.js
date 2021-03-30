const { criarQuestaoERetornarResposta } = require('./questao');

const padraoMesa = `

      1 | 2 | 3
    –––––––––––––
      4 | 5 | 6
    –––––––––––––
      7 | 8 | 9

`

let mesaVelha = padraoMesa

let posicoesDaMesa = []

const conferirSimbolo = (simbolo, jogo) => {
    const jogoVerificado = jogo.filter((jogada) => {
        return jogada === simbolo
    })
    return jogoVerificado.length === 3
}

const deuVelha = () => {
    const todasAsposicoesJaJogadas = (posicoesDaMesa.filter(posicao => posicao != '' || posicao != null)).length
    return todasAsposicoesJaJogadas === 9
}

const mostrarMesa = () => {
    let mesaParaMostrar = mesaVelha
    mesaParaMostrar = mesaParaMostrar.replace(/\b[1-9]{1}\b/g, ' ')
    console.log(mesaParaMostrar)
}

const conferirJogoParaSimbolo = (simbolo) => {
    const jogoGanhoPrimeiraFileiraHorizontal = [posicoesDaMesa[0], posicoesDaMesa[1], posicoesDaMesa[2]]
    const jogoGanhoSegundaFileiraHorizontal = [posicoesDaMesa[3], posicoesDaMesa[4], posicoesDaMesa[5]]
    const jogoGanhoTerceiraFileiraHorizontal = [posicoesDaMesa[6], posicoesDaMesa[7], posicoesDaMesa[8]]
    
    const jogoGanhoPrimeiraFileiraVertical = [posicoesDaMesa[0], posicoesDaMesa[3], posicoesDaMesa[6]]
    const jogoGanhoSegundaFileiraVertical = [posicoesDaMesa[1], posicoesDaMesa[4], posicoesDaMesa[7]]
    const jogoGanhoTerceiraFileiraVertical = [posicoesDaMesa[2], posicoesDaMesa[5], posicoesDaMesa[8]]

    const jogoGanhoDiagonal1X9 = [posicoesDaMesa[0], posicoesDaMesa[4], posicoesDaMesa[8]]
    const jogoGanhoDiagonal3X7 = [posicoesDaMesa[2], posicoesDaMesa[4], posicoesDaMesa[6]]

    const jogadasParaValidar = [
        {
            jogada: jogoGanhoPrimeiraFileiraHorizontal
        },
        {
            jogada: jogoGanhoSegundaFileiraHorizontal
        },
        {
            jogada: jogoGanhoTerceiraFileiraHorizontal
        },
        {
            jogada: jogoGanhoPrimeiraFileiraVertical
        },
        {
            jogada: jogoGanhoSegundaFileiraVertical
        },
        {
            jogada: jogoGanhoTerceiraFileiraVertical
        },
        {
            jogada: jogoGanhoDiagonal1X9
        },
        {
            jogada: jogoGanhoDiagonal3X7
        }
    ]
    
    let jogoGanho = false

    for (const jogadaParaValidar of jogadasParaValidar) {
        jogoGanho = conferirSimbolo(simbolo, jogadaParaValidar.jogada)

        if (jogoGanho) {
            break;
        }
    }

    return jogoGanho
}

const simularPensamento = async (jogador) => {

    console.log(`${jogador.nome} está pensando....`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve()
        }, 3000)
    })
}

const  proximaJogada = async (jogadorJogando, proximoJogadorAjogar) => {
    console.clear()
            
    console.log(`${jogadorJogando.nome} é a sua vez, digite um numero de 1 a 9:\n`)

    mostrarMesa(jogadorJogando)

    if(jogadorJogando.tipo === 'robo') {

        await simularPensamento(jogadorJogando)

        let posicoesDisponiveis = []

        for (let index = 0; index < 9; index++) {
            if(!posicoesDaMesa[index]) {
                posicoesDisponiveis.push(index + 1)
            }
        }

        if (posicoesDisponiveis.length  === 0) {
            for (let index = 0; index < 9; index++) {
                posicoesDisponiveis.push(index + 1)
            }
        }

        const posicaoJogadaAleatoria = (Math.floor(Math.random() * ( posicoesDisponiveis.length - 1 ) ) + 0)

        mesaVelha = mesaVelha.replace(posicoesDisponiveis[posicaoJogadaAleatoria], jogadorJogando.simbolo)

        posicoesDaMesa[Number(posicoesDisponiveis[posicaoJogadaAleatoria] - 1)] = jogadorJogando.simbolo
    }else {

        let resposta = await criarQuestaoERetornarResposta('')

        while (!resposta.match(/\b[1-9]{1}\b/)) {
            resposta = await criarQuestaoERetornarResposta(`${jogadorJogando.nome} Você deve digitar um numero de 1 a 9:\n`)
        }
    
        let repostaEstaMarcadaNamesa = mesaVelha.match(resposta)
    
        while (!repostaEstaMarcadaNamesa) {
            resposta = await criarQuestaoERetornarResposta(`${jogadorJogando.nome} digite um numero de 1 a 9 (que não esteja marcado):\n`)
            repostaEstaMarcadaNamesa = mesaVelha.match(resposta)
        }
    
        mesaVelha = mesaVelha.replace(resposta, jogadorJogando.simbolo)

        posicoesDaMesa[Number(resposta) - 1] = jogadorJogando.simbolo
    }

    mostrarMesa()

    if (conferirJogoParaSimbolo(jogadorJogando.simbolo)) {
        console.clear()
        mostrarMesa()
        console.log(jogadorJogando.nome, ' venceu!')
        await jogarOutraPartida()
    }

    if (conferirJogoParaSimbolo(jogadorJogando.simbolo)) {
        console.clear()
        mostrarMesa()
        console.log(jogadorJogando.nome, ' venceu!')
        await jogarOutraPartida()
    }

    if (deuVelha()) {
        console.log('deu velha!')
        await jogarOutraPartida()
    }

    await proximaJogada(proximoJogadorAjogar, jogadorJogando)
}

const jogarOutraPartida = async ( ) => {
    let outraPartida = await criarQuestaoERetornarResposta('Deseja jogar outra partida? [S] ou [N]: ')
    while (!outraPartida.match(/\b[sSnN]\b/)) {
        console.clear()
        outraPartida = await criarQuestaoERetornarResposta('Deseja jogar outra partida? [S] ou [N]: ')
    }
    outraPartida = outraPartida.toLowerCase()

    console.clear()
    
    if (outraPartida == 'n') {
        console.log(':) até logo!')
        process.exit()
    }else {
        mesaVelha = padraoMesa
        posicoesDaMesa = []
        console.clear()
        iniciarPartida()
    }
}

const iniciarPartida = async () => {
    try {
        let selecaoJogo = await criarQuestaoERetornarResposta(
            'Selecione apenas as opções [1] Dois Jogadores [2] Contra a máquina: '
        )

        while (!selecaoJogo.match(/\b[1-2]{1}\b/)) {
            console.clear()
            selecaoJogo = await criarQuestaoERetornarResposta('Selecione apenas as opções [1] Dois Jogadores [2] Contra a máquina: ')
        }

        console.clear()

        let jogador = {
            nome: '😆 ',
            simbolo: 'X',
            tipo: 'humano'
        }

        let jogador2 =  {
            nome: '🤖 Jeremias Robô',
            simbolo: 'O',
            tipo: 'robo'
        }

        if ( selecaoJogo == '1' ) {
            jogador.nome += await criarQuestaoERetornarResposta('Insira o nome do primeiro jogador: ')
            console.clear()
            jogador2.nome = '🥺 ' + await criarQuestaoERetornarResposta('Insira o nome do segundo jogador: ')
            jogador2.tipo = 'humano'
        }else {
            jogador.nome += await criarQuestaoERetornarResposta('Insira seu nome: ')
        }

        console.clear()

        const embaralharJogadores = Math.floor(Math.random() * 10) % 2 == 0 ? [ jogador, jogador2 ] : [ jogador2 , jogador] 

        await proximaJogada(embaralharJogadores[0], embaralharJogadores[1])
    
    } catch (erro) {
        console.error(erro)
    }
}

(async () => {
    await iniciarPartida()
})()



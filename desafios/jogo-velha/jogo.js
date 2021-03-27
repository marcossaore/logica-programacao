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

const  proximaJogada = async (jogadorJogando, proximoJogadorAjogar) => {
    console.clear()
            
    console.log(`${jogadorJogando.nome} é a sua vez, digite um numero de 1 a 9:\n`)

    mostrarMesa()

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

    posicoesDaMesa[[Number(resposta)] - 1] = jogadorJogando.simbolo

    if (conferirJogoParaSimbolo(jogadorJogando.simbolo)) {
        mostrarMesa()
        console.log(jogadorJogando.nome, ' venceu!')
        await jogarOutraPartida()
    }

    if (conferirJogoParaSimbolo(jogadorJogando.simbolo)) {
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
    let outraPartida = await criarQuestaoERetornarResposta('Deseja jogar outra partida? [S] ou [N]')
    while (!outraPartida.match(/\b[sSnN]\b/)) {
        console.clear()
        outraPartida = await criarQuestaoERetornarResposta('Deseja jogar outra partida? [S] ou [N]')
    }
    outraPartida = outraPartida.toLowerCase()
    
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
        const finalizarJogo = false

        let selecaoJogo = await criarQuestaoERetornarResposta(
            'Selecione: [1] Dois Jogadores [2] Contra a máquina \n'
        )

        while (!selecaoJogo.match(/\b[1-2]{1}\b/)) {
            console.clear()
            selecaoJogo = await criarQuestaoERetornarResposta('Selecione apenas as opções [1] Dois Jogadores [2] Contra a máquina \n')
        }

        console.clear()

        let jogador = {
            nome: '😆 ',
            simbolo: 'X'
        }

        let jogador2 =  {
            nome: '🤖 Jeremias Robot',
            simbolo: 'O'
        }

        if ( selecaoJogo == '1' ) {
            jogador.nome += await criarQuestaoERetornarResposta('Insira o nome do primeiro jogador: ')
            console.clear()
            jogador2.nome = '🥺 ' + await criarQuestaoERetornarResposta('Insira o nome do segundo jogador: ')
        }else {
            jogador.nome += await criarQuestaoERetornarResposta('Insira seu nome: ')
        }

        console.clear()

        const embaralharJogadores = Math.floor(Math.random() * 10) % 2 == 0 ? [ jogador, jogador2 ] : [ jogador2 , jogador] 

        proximaJogada(embaralharJogadores[0], embaralharJogadores[1])
    
    } catch (erro) {
        console.error(erro)
    }
}

(async () => {
    await iniciarPartida()
})()



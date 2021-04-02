const numeroAleatorio = Math.floor(Math.random() * 4) + 1

switch (numeroAleatorio) {
    case 1:
        console.log('Você é mais fraco do que pensa!')
        break;
    case 2:
        console.log('É só uma fase ruim, logo vai piorar.')
        break;
    case 3:
        console.log('Vai dar tudo certo! Menos pra vc...')
        break;
    default:
        console.log('O caminho é longo, mas a derrota é certa.')
        break;
}
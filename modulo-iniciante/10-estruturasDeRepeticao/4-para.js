const contadorAteCem = 100

for (let index = 0; index < contadorAteCem; index++) {
    console.log(`${index}`)
}

for (let index = 0; index <= contadorAteCem; index++) {
    if (index % 2 == 0) {
        console.log(`${index} - é par`)
    }else {
        console.log(`${index} - é ímpar'`)
    }
}
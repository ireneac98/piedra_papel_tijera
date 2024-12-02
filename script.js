let puntosJugador = 0
let puntosOrdenador = 0

function empezarJuego(eleccion_jugador){
    const elecciones = ['piedra', 'papel', 'tijera']
    const eleccion_ordenador = elecciones[Math.floor(Math.random() * 3)]
    resultado = ''

    if(eleccion_jugador === eleccion_ordenador) {
        `Empate. Ambos habéis seleccionado ${eleccion_jugador}`
    } else if(
        (eleccion_jugador === 'piedra' && eleccion_ordenador === 'tijera') ||
        (eleccion_jugador === 'papel' && eleccion_ordenador === 'piedra') ||
        (eleccion_jugador === 'tijera' && eleccion_ordenador === 'papel') 
    ){
        resultado = `Jugador gana un punto. ${eleccion_jugador} vence a ${eleccion_ordenador}`
        puntosJugador++
    } else {
        resultado = `Máquina gana un punto. ${eleccion_ordenador} vence a ${eleccion_jugador}`
        puntosOrdenador++
    }

    document.getElementById('resultado').textContent = resultado
    document.getElementById('puntos').textContent = `Jugador: ${puntosJugador} | Máquina: ${puntosOrdenador}`

    if(puntosJugador === 3 || puntosOrdenador === 3) {
        acabarJuego()
    }
}

function acabarJuego(){
    const resultadoFinal = puntosJugador === 3 ? `¡Felicidades, has ganado la partida! :)` : `Upss, lo siento máquina ha ganado la partida :( `
    document.getElementById('resultado').textContent = resultadoFinal

    document.getElementById('botonPiedra').disabled = true
    document.getElementById('botonPapel').disabled = true
    document.getElementById('botonTijera').disabled = true
}


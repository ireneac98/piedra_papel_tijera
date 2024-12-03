//Variables para los puntos
let puntosJugador = 0
let puntosOrdenador = 0

//Función para empezar el juego
function empezarJuego(eleccionJugador){
    const elecciones = ['piedra', 'papel', 'tijera']
    const eleccionOrdenador = elecciones[Math.floor(Math.random() * 3)]
    let resultado = ''

    if(eleccionJugador === eleccionOrdenador) {
        resultado = `Empate. Ambos habéis seleccionado ${eleccionJugador}`
    } else if(
        (eleccionJugador === 'piedra' && eleccionOrdenador === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionOrdenador === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionOrdenador === 'papel')) {
           resultado = `¡Ganas un punto! ${eleccionJugador} vence a ${eleccionOrdenador}`
            puntosJugador++
        } else {
            resultado = `Máquina gana un punto, ${eleccionOrdenador} vence a ${eleccionJugador}`
            puntosOrdenador++
        }
    
    document.getElementById('resultado').textContent = resultado
    document.getElementById('puntos').textContent = `Jugador: ${puntosJugador} | Máquina: ${puntosOrdenador}`
    
    if(puntosJugador === 3 || puntosOrdenador === 3) {
        finJuego()
    }
}

//Función para finalizar el juego
function finJuego(){
    const finalResultado = puntosJugador === 3 ? '¡Felicidades, has ganado! :)' : 'Upss, lo siento, ha ganado la máquina :('
    document.getElementById('resultado').textContent = finalResultado

    document.getElementById('botonPiedra').disabled = true
    document.getElementById('botonPapel').disabled = true
    document.getElementById('botonTijera').disabled = true
}



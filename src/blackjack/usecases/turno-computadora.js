import { getCard, valueCard, crearCartaHtml } from "./";

/**
 * Funcion que ejecuta la logica de la computadora
 * @param {Number} puntosMinimos
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} computadoraCartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, computadoraCartas, deck = []) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesarios');

    let puntosComputadora = 0;
    do {
        const card= getCard(deck);
        puntosComputadora   = puntosComputadora + valueCard( card );
        puntosHTML.innerText = puntosComputadora;

        crearCartaHtml(computadoraCartas, card);

        if ( puntosMinimos > 21 ) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 10 );
}
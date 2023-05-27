import { createDeck, getCard, valueCard, turnoComputadora, crearCartaHtml } from './usecases'

/**
 * 2C = Two of Clubs (Tŕeboles)
 * 2D = Two of Diaminds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Spadas)
 */

let deck         = [];
const types      = ['C', 'D', 'H', 'S'];
const specials   = ['A', 'J', 'K', 'Q'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// Refencias de HTML
const btnNuevo   = document.querySelector('#btnNuevo');
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const scores = document.querySelectorAll('small');

const jugadorCartas     = document.querySelector('#jugador-cartas');
const computadoraCartas = document.querySelector('#computadora-cartas');

deck = createDeck(types, specials);

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = createDeck(types, specials);

    puntosJugador     = 0;
    puntosComputadora = 0;

    scores[0].innerText = 0;
    scores[1].innerText = 0;

    jugadorCartas.innerHTML     = '';
    computadoraCartas.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;
})

btnPedir.addEventListener('click', () => {

    const card    = getCard(deck);
    puntosJugador = puntosJugador + valueCard( card );
    scores[0].innerText = puntosJugador;

    crearCartaHtml(jugadorCartas, card);

    if ( puntosJugador > 21) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, scores[1], computadoraCartas, deck);
    } else if ( puntosJugador === 21 ) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, scores[1], computadoraCartas, deck);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, scores[1], computadoraCartas, deck);
});
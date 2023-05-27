/**
 * Funcion que devuelve la ultima carta
 * @param {Array<String>} deck
 * @returns {String}
 */
export const getCard = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}
import _ from "underscore";
// Esta funcion crea un nuevo deck
/**
 * Esta funcion crea un nuevo deck;
 * @param {Array<String>} tiposDeCarta Ejemplo '['C', 'D', 'H', 'S']'
 * @param {Array<String>} tiposEspeciales Ejemplo '['A', 'J', 'K', 'Q']'
 * @returns {Array} Retorna un nuevo deck de cartas
 */
export const createDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for(const type of tiposDeCarta) {
            deck.push(i + type);
        }
    }

    for (const type of tiposDeCarta) {
        for (const special of tiposEspeciales) {
            deck.push(special + type);
        }
    }

    return _.shuffle(deck);

};
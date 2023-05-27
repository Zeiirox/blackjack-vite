/**
 * Funcion que devuelve el valor de la carta
 * @param {String} carta
 * @returns {number}
 */
export const valueCard = ( carta ) => {
    const value = carta.substring(0, carta.length - 1);
    return isNaN( value ) ?
        (( value === 'A' ) ? 11 : 10)
        : value * 1;
}
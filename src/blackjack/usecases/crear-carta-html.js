/**
 * @param {HTMLImageElement} elementHTML elemento en el que agregara la carta
 * @param {String} card numero de la carta a crear
 */
export const crearCartaHtml = (elementHTML, card) => {

    if ( !card ) throw new Error('La carta es un argumento obligatorio');

    const cardImg = document.createElement('img');
    cardImg.src   = `assets/cartas/${ card }.png`;
    cardImg.classList.add('carta');
    elementHTML.append( cardImg );
}
/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    let altx = x;
    let alty = y;
    if (x > 7) {
        altx = x - 15;
    }
    if (y > 7) {
        alty = y - 15;
    }
    if ((altx > 0 && alty > 0  ) || (altx < 0 && alty < 0 )) {
        return Math.abs(Math.abs(altx) - Math.abs(alty))-1;
    }
    else if( (altx===1 || alty===1)){
        return Math.abs(Math.abs(altx) - Math.abs(alty))-1;
    }
    else if( (altx===7 || alty===7)){
        return Math.abs(Math.abs(altx) - Math.abs(alty));
    }
    return Math.abs(Math.abs(altx) - Math.abs(alty))+1;

}

module.exports = metro;

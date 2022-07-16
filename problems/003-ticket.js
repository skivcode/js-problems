/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const arr =number.split('').map( s => +s );
    if((arr[0]+arr[1]+arr[2])===(arr[3]+arr[4]+arr[5])){
        return true
    }
    return false;
}
checkTicket('123032');


module.exports = checkTicket;

/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    const xArr=x.split(':')
    const yArr=y.split(':')
    const h=yArr[0]-xArr[0]
    const m= yArr[1]-xArr[1]
    const s= yArr[2]-xArr[2]
    const res=h*3600+m*60+s

    return res;
}
getTimeDelta('01:01:01', '02:02:02')

module.exports = getTimeDelta;

/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {object[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let res = undefined;
    let age = 0;
    let i = 0;
    for (el of list) {
        if (el.gender == "Male" && el.age > age) {
            age = el.age;

            res = i + 1;
        }
        i++;
    }
    return res;
}


module.exports = census;

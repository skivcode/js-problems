/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */

function flatten(array) {  
    return array.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

module.exports = flatten;

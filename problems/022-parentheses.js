/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let closeIsLast=false
    let openCounter=0
    let closeCounter=0
    for(ch of value){
        if(ch===')' && openCounter===0){
            return false
        }
        else if(ch==='('){
            openCounter++
            closeIsLast=false
        }
        else if(ch===')' && openCounter!=0){
            closeCounter++
            closeIsLast=true
        }
    }
    return closeIsLast && openCounter===closeCounter ? true: false;
}


module.exports = parentheses;

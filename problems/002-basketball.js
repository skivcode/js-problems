/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    const arr=[];
    let newEl;
    let first;
    let second;

    points.forEach((el) => {newEl=el.split('-');arr.push(newEl);})
 let newArr=arr.map( newEll => newEll.map((str) => +str ))

 first= newArr[0][0]+newArr[1][0]+newArr[2][0]+newArr[3][0];
 second= newArr[0][1]+newArr[1][1]+newArr[2][1]+newArr[3][1];

 if(second===first){
    return undefined
 } else if (second >first){
 return 2
 }else{
    return 1
 }
}
getWinner(['36-32', '32-24', '20-28', '30-26'])
module.exports = getWinner;

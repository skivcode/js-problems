/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const res = [];
    date = date.split(".").reverse().join("-");
    console.log(date);
    firstDate = new Date(Date.parse(date));
    console.log(firstDate);
    resDate = new Date(firstDate.setDate(firstDate.getDate() + 14));
    if (resDate.getDate() < 10) {
        res.push("0" + resDate.getDate());
    } else {
        res.push(resDate.getDate());
    }

    if (resDate.getMonth() + 1 < 10) {
        res.push("0" + (resDate.getMonth() + 1));
    } else {
        res.push(resDate.getMonth() + 1);
    }
    res.push(resDate.getFullYear());
    return res.join(".");
}

module.exports = vacation;

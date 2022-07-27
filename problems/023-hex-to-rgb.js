/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    const arr = [];
    color = color.replace("#", "").split("");
    console.log(color);
    if (color.length === 3) {
        const hexColor = color
            .map((el) => el + el)
            .map((el) => parseInt(el, 16))
            .join(", ");
        console.log("rgb(" + hexColor + ")");
        return "rgb(" + hexColor + ")";
    }
    for (i = 0; i < color.length; i += 1) {
        arr.push(color[i] + color[++i]);
        console.log(arr)
    }
    const hexColor = arr.map((el) => parseInt(el, 16)).join(", ");
    console.log("rgb(" + hexColor + ")");
    return "rgb(" + hexColor + ")";
}
hexToRgb('#800080');
module.exports = hexToRgb;

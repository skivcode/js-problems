/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 10) {
        return "just now";
    } else if (seconds >= 10 && seconds < 60) {
        return Math.floor(seconds / 10) * 10 + " seconds ago";
    } else if (seconds >= 60 && seconds < 3600) {
        if (Math.floor(seconds / 60) === 1) {
            return Math.floor(seconds / 60) + " minute ago";
        }
        if (Math.floor(seconds / 60) < 30) {
            return Math.floor(seconds / 60) + " minutes ago";
        }
        return "30 minutes ago";
    } else if (seconds >= 3600 && seconds < 86400) {
        if (Math.floor(seconds / 3600) === 1) {
            return Math.floor(seconds / 3600) + " hour ago";
        }
        if(Math.floor(seconds / 3600)<12){
        return Math.floor(seconds / 3600) + " hours ago";}
        return "12 hours ago"
    } else if (seconds >= 86400 && seconds < 604800) {
        if (Math.floor(seconds / 86400) === 1) {
            return Math.floor(seconds / 86400) + " day ago";
        }
        return "a few days ago";
    } else if (seconds >= 604800 && seconds < 2419200) {
        if (Math.floor(seconds / 604800) === 1) {
            return Math.floor(seconds / 604800) + " week ago";
        }
        return Math.floor(seconds / 604800) + " weeks ago";
    }

    return "undefined";
}

timeago(10);
module.exports = timeago;

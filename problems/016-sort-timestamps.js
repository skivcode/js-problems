/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    list=list.map((str)=>'2022-01-01T'+str+'.417Z')
    function dateSort(a,b){
        console.log(Date.parse(b));
        console.log(Date.parse(a));
        if(Date.parse(b)>Date.parse(a)){
            return -1
        }
        if(Date.parse(b)<Date.parse(a)){
            return 1
        }
    return 0
    }
   
return list.sort(dateSort).map((el)=>el.slice(el.indexOf('T')+1,el.indexOf('.')))

} 



module.exports = sortTimestamps;

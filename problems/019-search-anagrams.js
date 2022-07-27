/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    const res=[]
    value= value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    const arr=value.split(' ')
    console.log(arr)

    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            let first=arr[i].toUpperCase().split("").sort().join()
            let  second=arr[j].toUpperCase().split("").sort().join()
    
            if (first===second  && arr[i]&& arr[j]&& arr[i]!=arr[j]) {
               res.push(arr[i])
            }
         continue
        }
    }   
   return res.join(' ')
}

module.exports = searchAnagrams;

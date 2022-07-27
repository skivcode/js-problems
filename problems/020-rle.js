/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let counter=0
   const  res=[]
    value=value.split('')
    for(i=0;i<value.length;i++){
        if(value[i]!=value[i+1]&& counter===0){
            res.push(value[i])
            }
            else if(value[i]!=value[i+1]&& counter!=0){
                counter++
                res.push(counter)
                res.push(value[i])
                counter=0
            }else{
                counter++
            }
    }
    return res.join().replace(/,/g,'')
}

module.exports = rle;

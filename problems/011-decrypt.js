/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
  const arr=secret.split('').map((el)=>el.charCodeAt(0)).map((el)=>+el).map((el)=>{
   if (el!=32 && el!=122){
    return el+1
   }
   else if(el===122){
    return 97
   }
   else{
    return el
   }
  }
 
  
  );
  const res=[]
for(el of arr){
res.push(String.fromCharCode(el))
}
return res.join('')
}
decrypt('zmc vd hfmnqd rozbdr')
module.exports = decrypt;

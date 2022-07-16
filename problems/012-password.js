/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    let Length=function (){ 

  return password.length < 7 ? false : true
    
    }

 let UpperCase=function (){ 
    for(char of password){
    if(char===char.toUpperCase() && !parseInt(char) ){
        return true
    }

}}
let LowerCase=function (){ for(char of password){
    if(char===char.toLowerCase()){
        return true
    }

}}
let Number=function (){for(char of password){
    if(parseInt(char)){
        return true
    }
}}
// console.log(Number())
// console.log(LowerCase())
// console.log(UpperCase())
// console.log(Length())
 return Number() && LowerCase() && UpperCase() && Length() ? true: false
}
validatePassword('abcdef7')

module.exports = validatePassword;

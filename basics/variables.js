//const keyword is used to declared variables which will not be changed like
const accountId = "12345"
// if you try to change the accountId, it will throw error i  console

//Let and Var keywords are used to declared variable which you can change 

let accountEmail =" nazeera@gmail.com"
var accountPassword = "121212"
//It is not recommended to use 'var' 
// because of block scope and functional scope in javaScript


// in javascript, you declare variable without mentioning keyword but this is not recommended
accountCity="Delhi"


//console.log is used to output the value on the terminal
console.log(accountId)

//likewise console.table is used to output multiple values of the variables in a tabular form example

console.table([accountId,accountEmail,accountPassword,accountCity])

//In javaScript, if we declare a variable without initializing it with some value, it will give "undefined" as default value in console.ex

let accountState;


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// In javaScript, we can convert the type of variables using their datatypes.

let userName = undefined

//console.log(typeof userName) // o/p is string

let accountName = Number(userName)

//console.log(accountName)

// likewise 
// "12" --> can be converted to number
// "" --> 0 but the type will be number only for testcases
// undefined --- > NaN
// "12abc" --> NaN


let isLoggedIn = undefined

//console.log(typeof isLoggedIn) 

let booleanLoggedIn = Boolean(isLoggedIn)

//console.log( booleanLoggedIn)

//1 ---> true    0 ---->false
//"1" --->true
//"" ---->false
//null --->false
//undefined ---> false



let someNumber=null

console.log(typeof someNumber)

let stringNumber = String(someNumber)

console.log(stringNumber)


//12 ---->12
//"12nskn"--->12nskn
//null--->null
//undefined----> undefined
//"" ----->"  "
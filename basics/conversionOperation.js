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




/********************************Operations******************************/


//some basic arthematic operations are
let a=2
let b=5

//console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a**b);
// console.log(a/b);
// console.log(a%b);


let str1= "hello"
let str2 = " Nazeera"

let str3 = str1+str2

// console.log(str3) // o/p "hello Nazeera"

// console.log("1"+2) // o/p 12
// console.log(1+"2") // o/p 12
// console.log(1+2+"2") //o/p 32


//console.log(+true) // o/p 1


let num1 = 100
num1++;

//console.log(num1); // o/p 101














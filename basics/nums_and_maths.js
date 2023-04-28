// Numbers can be declared in two ways 
let score = 400 // we can declare in this way. this gives the only the number as output
console.log(score);

let balance = new Number(10000000); // this also used in banking applications etc.this gives output as Number:100
console.log(balance);

// we can the prototypes of Number in console. some examples are


console.log(balance.toString());

console.log(balance.toFixed(2));

let Num = 123.879

console.log(Num.toPrecision(3));//gives round off value 

console.log(balance.toLocaleString('en-IN'));




/********************Maths************************/

//Math itself is an object in javaScript.we can check it  console.

console.log(Math);

console.log(Math.abs(-4)); // it gives absolute value

console.log(Math.round(4.6)); //it gives round off value

console.log(Math.ceil(4.2)); // it always takes top value to round off

console.log(Math.floor(4.6)); //it always takes floor value to round off

console.log(Math.random()); // it always gives value between 0 and 1

// Math.random used when we need specific value like in dice game we need only 6 values.

console.log(Math.random() *10 +1); // *10 is used to shift the decimal place and +1 is used to avoid zero value
// so that we can always get value between 1 and 9


console.log(Math.floor((Math.random()*10)+1)); // floor is used to get round off value 


// In some cases we can min and max values also

let min =10
let max = 20

console.log(Math.floor((Math.random()*(max-min+1))+min)); // using this formula we can get values between min and max values.



let myName = " Nazeera"
let count = 50

console.log(myName + count + " value"); // this is old syntax used to concate two strings. not recommended

console.log(`my name is ${myName} and my repocount is ${count}`); // this is new way of concatination of two strings


// string can be declared as

let newString = new String("Nazeera-begum")

// strings have a lot of methods. some examples are

console.log(newString.charAt(5));

console.log(newString.indexOf('b'));

console.log(newString.lastIndexOf('e'));

console.log(newString.split('-'));

console.log(newString.slice(5,8));

console.log(newString.slice(-8,7))

console.log(newString.replace('-','@'));

console.log(newString.toUpperCase());

let string2 = "    Nazeera    hhgg jhk    "

console.log(string2.trim());



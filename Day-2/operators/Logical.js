// Logical Operators

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5        
const check2 = 4 > 3 && 10 < 5        
const check3 = 4 < 3 && 10 < 5       
console.log(check1);
console.log(check2);
console.log(check3);


// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false
console.log(check4);
console.log(check5);
console.log(check6);

//! Negation examples

let check7 = 4 > 3                     
let check8 = !(4 > 3)                 
let isLightOn = true
let isLightOff = !isLightOn         
let isMarried = !false                
console.log(check7);
console.log(check8);
console.log(isLightOn);
console.log(isLightOff);
console.log(isMarried);

// Exercise 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const countries = require('./countries');
const webTechs = require('./web_techs');

console.log(countries);
console.log(webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const textRemove = /[.,]/g;
const words = text.replace(textRemove, '').split(' ');
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Meat','Milk', 'Coffee', 'Tea', 'Honey']
let check = shoppingCart.includes('Meat')
if (check == true){
  console.log('already added');
  console.log(shoppingCart)
}else{
  shoppingCart.unshift("Meat")
  console.log(shoppingCart);
}
let check2 = shoppingCart.includes('Sugar')
if (check2 == true){
  console.log('already added');
  console.log(shoppingCart)

}else{
  shoppingCart.push("Sugar")
  console.log(shoppingCart);
}
let allrgic = true
if (allrgic == true){
  let checkRemove = shoppingCart.indexOf("Honey")
  shoppingCart.splice(checkRemove,1)
  console.log(shoppingCart);
}else{
  console.log(shoppingCart);
}
let Modifying = shoppingCart.indexOf('Tea')
shoppingCart[Modifying] = "Green tea"
console.log(shoppingCart);



let firstadd = shoppingCart.push()
console.log(firstadd);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countrie = ['india','china','japan']
if (countrie.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countrie.push('Ethiopia');
}
console.log(countrie);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let webTech = ['HTML','JAVASCRIPT','CSS','Sass']

if (webTech.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTech.push('Sass');
  console.log(webTech);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


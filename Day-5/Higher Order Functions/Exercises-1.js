const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//3 Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log("country =",country));

//4 Use forEach to console.log each name in the names array.
names.forEach(name => console.log("name =",name));

//5 Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log("number =",number));

//6 Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpperCase = countries.map(country => country.toUpperCase());
console.log("countriesUpperCase =",countriesUpperCase);

//7 Use map to create an array of countries' lengths from the countries array.
const countriesLength = countries.map(country => country.length);
console.log("countriesLength =",countriesLength);

//8 Use map to create a new array by changing each number to its square in the numbers array.
const numbersSquared = numbers.map(number => number * number);
console.log("numbersSquared",numbersSquared);

//9 Use map to change each name to uppercase in the names array.
const namesUpperCase = names.map(name => name.toUpperCase());
console.log("namesUpperCase",namesUpperCase);

//10 Use map to map the products array to its corresponding prices.
const prices = products.map(product => product.price);
console.log("prices",prices);

//11 Use filter to filter out countries containing 'land'.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log("countriesWithLand",countriesWithLand);

//12 Use filter to filter out countries having six characters.
const sixCharacterCountries = countries.filter(country => country.length === 6);
console.log("sixCharacterCountries",sixCharacterCountries);

//13 Use filter to filter out countries containing six letters or more in the countries array.
const countriesWithSixLettersOrMore = countries.filter(country => country.length >= 6);
console.log("countriesWithSixLettersOrMore",countriesWithSixLettersOrMore);

//14 Use filter to filter out countries starting with 'E'.
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

//15 Use filter to filter out only prices with values.
const validPrices = products.filter(product => typeof product.price === 'number');
console.log(validPrices);

//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
  return array.filter(item => typeof item === 'string');
}

//17 Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log(sum);

//  18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concat = countries.reduce((acc,cur) => acc+cur,)
console.log(concat);

// 19 Explain the difference between some and every
// some can check the element if any one is number its return boolen true   
// every can check the element if any one is not a number its return boolen false

// 20 Use some to check if some names' length greater than seven in names array
const checksome = names.some(name => name.length > 7)
console.log(checksome);

// 21 Use every to check if all the countries contain the word land
const checkland = countries.every(land => land.includes("land"))
console.log(checkland);

// 22 Explain the difference between find and findIndex.
// Return the first element which satisfies the condition
// Return the position of the first element which satisfies the condition

// 23 Use find to find the first country containing only six letters in the countries array
const countriesletter = countries.find(length => length.length === 6)
console.log(countriesletter);

// 24 Use findIndex to find the position of the first country containing only six letters in the countries array
const countrieslette = countries.findIndex(length => length.length === 6)
console.log(countrieslette);

// 25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const check = countries.findIndex(index => index.includes("Norway"))
if(check){
  console.log(check);
}else{
  console.log(-1);
}

// 26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const check1 = countries.findIndex(index => index.includes("Russia"))
if(check1){
  console.log(check1);
}else{
  console.log(-1);
}
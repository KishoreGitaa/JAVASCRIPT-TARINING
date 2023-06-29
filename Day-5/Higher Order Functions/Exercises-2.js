const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',  'Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya',]

// 1: Find the total price of products by chaining array iterators
const products = [
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3', price: 30 },
  { name: 'Product 4', price: 40 },
];
const total = products.map( products => products.price)
const sum = total.reduce((total,price) => total + price,0)
console.log("total price",sum);

// 2 Find the sum of price of products using only reduce reduce(callback))
const value = products.reduce((products,cur) => products + cur.price,0)
console.log("sum of value",value);

// 3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(patten){
  const countriesmatch = countries.filter(countries => countries.toLowerCase().includes(patten.toLowerCase()))
  return countriesmatch
}
const patten = categorizeCountries("land")
console.log("countries with land",patten); 

//  5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  return countries.slice(0, 10); 
}
console.log(getFirstTenCountries()); 

// 6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  return countries.slice(-10); 
}
console.log(getLastTenCountries());

//  7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)




const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set
const languages = new Set()
console.log(languages);

// Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log(numberSet);

// Remove an element from a set
numberSet.delete(5);
console.log(numberSet);

// Clear a set
numberSet.clear();
console.log(numberSet);

// Create a set of 5 string elements from array
const stringArray = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
const stringSet = new Set(stringArray.slice(0, 5));
console.log(stringSet);

// Create a map of countries and number of characters of a country
const countryMap = new Map();
for (let country of countries) {
  countryMap.set(country, country.length);
}
console.log(countryMap);
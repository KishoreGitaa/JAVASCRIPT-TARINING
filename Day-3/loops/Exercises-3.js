// Copy countries array(Avoid mutation)
let myname =  ['HTML', 'CSS', 'JS', 'React','CSS']
let copy =new Set(myname)
let news=[...copy]
console.log("copy array",news);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let copy1 = [...myname]
let sort = copy1.sort()
let sortcopyarray = sort
console.log("sort copy array =",sortcopyarray);

// Sort the webTechs array and mernStack array
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(webTechs.sort());
console.log(mernStack.sort());

// Extract all the countries contain the word 'land' from the countries array and print it as array
const countries = ["Finland", "Iceland", "Greenland", "United States", "United Kingdom", "Sweden","Iran","India", "France"];
const countriesWithLand = [];

for (const country of countries) {
  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}
console.log("Countries with 'land':", countriesWithLand);


// Find the country containing the hightest number of characters in the countries array
let higtest = ''
for (let i=0; i<countries.length; i++){
    if(countries[i].length > higtest.length)  {
        higtest = countries[i] 
    } 
}
console.log(" hightest number of characters = ",higtest);
 
// Extract all the countries containing only four characters from the countries array and print it as array
const fourCharacters = [];

for (let i = 0; i < countries.length; i++) {
  const length = countries[i].length;
  if (length == 4) {
    fourCharacters.push(countries[i]);
  }
}
console.log("Countries with four characters:", fourCharacters);

// Extract all the countries containing only four characters from the countries array and print it as array
let withTwoOrMoreWords =[]
for (const country of countries) {
    if (country.includes(" ")) {
        withTwoOrMoreWords.push(country);
    }
}
console.log("countries containing two or more words =",withTwoOrMoreWords);

// Reverse the countries array and capitalize each country and stored it as an array
let reverse = [];
for (let i = countries.length - 1; i >= 0; i--) {
  let capitalized = countries[i].toUpperCase();
  reverse.push(capitalized);
}
console.log(reverse);

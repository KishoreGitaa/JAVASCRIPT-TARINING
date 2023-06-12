// empty array
const arr = Array()
console.log(arr);
console.log();

// Declare an array with more than 5 number of elements
// Find the length of your array
let number = [1,2,3,4,5,6,7]
console.log(number.length);
console.log();

// Get the first item, the middle item and the last item of the array
console.log(number[0])
let middleindex = number[Math.floor(number.length /2)]
console.log(middleindex);
let lastindex = number.length-1
console.log(lastindex);
console.log();

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Kishore',250,true,
    { country: 'india', city: 'tamilnadu' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the number of companies in the array
console.log("First company",itCompanies[0]);
let Middle = itCompanies[Math.floor(itCompanies.length/2)]
console.log("Middle company",Middle);
let Last = itCompanies[itCompanies.length-1]
console.log("Last company",Last);
// Print out each company
console.log();
// Change each company name to uppercase one by one and print them out
let company1 = itCompanies[0]
let company2 = itCompanies[1]
let company3 = itCompanies[2]
console.log(company1.toUpperCase());
console.log(company2.toUpperCase());
console.log(company3.toUpperCase());



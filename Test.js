// ● What is an object in JavaScript
// object is the set collection  of keys and values

// ● How do you create an object in JavaScript?
// we can create a object useing key and values with inside the {}
const ex = {
  firstName: "kishore",
  lastName: "v",
};
console.log(ex);

// ● How do you access a property of an object in JavaScript
// access the property with object name

// ● How do you add a new property to an object in JavaScript
let newproperty = {
  ...ex,
  location: "chennai",
};
console.log(newproperty);

// ● How do you remove a property from an object in JavaScript

// ● What is the difference between var, let and const
// var ex var always use last variable is takesn . this is not use the block variable
var a = 10;
{
  var a = 20;
}
console.log("var", a);

// let ex
// let is use to block the variable and execite block vice result.
let b = 20;
{
  let b = 10;
  console.log("let", b);
}
console.log("let", b);

// const ex
// const is also a block vice the variable and execite block vice result and we cant change the variable value.

// ● PROBLEM #1 - FUNCTIONS - STRING_METHODS
// Write a function to print the full name of a person the function should take the first,middle and last name as the args
function fullName(firstName, middleName, lastName) {
  let first = firstName;
  let middle = middleName;
  let last = lastName;
  console.log([first, middle, last]);
}
fullName("Kishore", "Magi", "V");

// ● PROBLEM #2 - FUNCTIONS - LOOPS
// Write a function to print the square pattern
function pattern(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= num; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
pattern(5);

// PROBLEM 3
function find(arr, key) {
  var start = arr.indexOf(key);
  var end = arr.lastIndexOf(key);
  if (start === -1) {
    return -1 + " " + -1;
  } else {
    return start + " " + end;
  }
}
var arr = [1, 2, 3, 4, 5, 5];
var key = 5;
console.log(find(arr, key));

function finds(arr, key) {
  var start = arr.indexOf(key);
  var end = arr.lastIndexOf(key);

  if (start === -1) {
    return -1 + " " + -1;
  } else {
    return start + " " + end;
  }
}
var arr = [6, 5, 4, 3, 1, 2];
var key = 4;
console.log(finds(arr, key));

// Given an integer array Arr[] of size N. The task is to find sum of it.
function value(arr) {
  let n = arr;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    let number = i;
    sum += number;
  }
  return sum;
}
console.log(value(4));

function sum(arr) {
  let n = arr;
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    let number = n[i];
    sum += number;
  }
  return sum;
}
console.log(sum([1, 3, 3]));

// Extract the vowels present in the above mentioned strings
function vowels(str) {
  var vowels = [];
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowels.push(char);
    }
  }
  return vowels.join("");
}
var extractedVowels = vowels("thequickbrownfoxjumpsoverthelazydog");
console.log(extractedVowels);

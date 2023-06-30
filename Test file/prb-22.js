// Problem 22: Write a function that takes an array of strings as input and returns a new
// array with the strings sorted in alphabetical order.
// Input: ["banana", "apple", "orange", "grape"]
// Output: ["apple", "banana", "grape", "orange"]


function value (a) {
    let result =a.sort()
    return result
}
const myname = ["banana", "apple", "orange", "grape"]
console.log(value(myname));
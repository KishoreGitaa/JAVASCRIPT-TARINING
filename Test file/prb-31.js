// Problem 31: Write a function called "mergeArrays" that takes two arrays as input and returns a
// new array that combines the elements of both arrays using the spread operator.
// Example:
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

let a = [1,2,3]
let b = [4,5,6]
let c = [...a,...b]

console.log(c);

// Problem 20: Write a function that takes an array of numbers as input and returns a new
// array where each number has been squared.
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

function numberSq (num){
    const value = num.map((i) => i * i);
    return value
}
const number = [1, 2, 3, 4, 5];
console.log(numberSq(number));
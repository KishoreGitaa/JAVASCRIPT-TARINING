// Problem 18: Write a function that takes a string as input and returns an array of all the
// words in the string.
// Input: "Hello, how are you?"
// Output: ["Hello", "how", "are", "you"]
// Input: "The quick brown fox jumps over the lazy dog"
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]


// let text ="Hello, how are you?"
// console.log(text.split(" "));

function problem  (text) {
    let result = text.split(" ")
    return result 
}
let value = "Hello, how are you?"
let value1 = "The quick brown fox jumps over the lazy dog"
console.log(problem(value))
console.log(problem(value1))

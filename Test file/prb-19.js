// Problem 19: Write a function that takes an array of strings as input and returns a new
// array where each string has been reversed.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

function reverseStrings(strings) {
  return strings.map((string) => string.split("").reverse().join(""));
}

console.log(reverseStrings(["hello", "world"])); 

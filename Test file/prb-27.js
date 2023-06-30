// Problem 27: Write a function that takes two arrays as input and returns a new array
// containing the common elements between the two arrays, using Sets.
// Input: [1, 2, 3, 4, 5], [4, 5, 6, 7, 8]
// Output: [4, 5]

let a = [1, 2, 3, 4, 5];
let b = [4, 5, 6, 7, 8];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num));
let C = new Set(c);

console.log(c);

function array([a1, b1]) {
  let A = new Set(a1);
  let B = new Set(b1);

  let c = a1.filter((num) => B.has(num));
  let C = new Set(c);
  return C;
}
let a1 = [1, 2, 3, 4, 5];
let b1 = [4, 5, 6, 7, 8];
console.log(array([a1, b1]));

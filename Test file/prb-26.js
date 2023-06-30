// Problem 26: Write a function that takes an array of objects as input, where each object
// has a "name" and "age" property. The function should return a Map object where the
// names are the keys and the ages are the values.
// Input: [{ name: "kishore", age: 25 }, { name: "selva", age: 30 }]
// Output: Map { "kishore" => 25, "selva" => 30 }

const myname = [
  { name: "kishore", age: 25 },
  { name: "selva", age: 30 },
];
for (const {name , age} of myname){
    console.log(name,age);
}
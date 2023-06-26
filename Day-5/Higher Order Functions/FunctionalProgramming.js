// forEach
let sum = 0;
const number = [1, 2, 3, 4, 5];
for (i = 0; i < number.length; i++) {
  sum = number[i];
  console.log(sum);
}
console.log("");

let sum1 = 0;
const number1 = [1, 2, 3, 4, 5];
number1.forEach((i) => console.log(i));
// console.log(sum1);

console.log("");
let value = 0;
const num = [1, 2, 3, 4, 5];
num.forEach((i) => (value += i));
console.log(value);

console.log("");
let name1 = ["kishore", "magi", "kish", "jack", "rose"];
name1.forEach((element) => console.log(element.toUpperCase()));

// map
const number6 = [1, 2, 3, 4, 5];
const numsq = number6.map((num) => num * num);
console.log(numsq);

let myname = ["kishore", "magi", "kish", "jack", "rose"];
let mynameuppercase = myname.map((nameup) => nameup.toLocaleUpperCase());
let mynameuppercasefirst3letter = myname.map((nameup) =>nameup.toLocaleUpperCase().slice(0, 3));
console.log(mynameuppercase);
console.log(mynameuppercasefirst3letter);

// filter
const countries = [
  "Finland",
  "Iceland",
  "Netherlands",
  "Switzerland",
  "New Zealand",
  "Brazil",
  "Japan",
  "Kenya",
  "Romania",
  "Georgia",
];
const conwithland = countries.filter((name) => name.includes("land"));
const conwithia = countries.filter((name) => name.includes("ia"));
const conwithlength = countries.filter((name) => name.length === 5);

console.log(conwithland);
console.log(conwithia);
console.log(conwithlength);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresabouv80 = scores.filter((score) => score.score > 80);
console.log(scoresabouv80);



// reduce
const numbers = [1, 2, 3, 4, 5];
const sum9 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum9);

// every
const names = ["Asabeneh", "Mathias", 4, "Brook"];
const allstr = names.every((nam) => typeof nam === "string");
console.log(allstr);

// find
const age = [21,34,56,10,67,89,11]
const result = age.find(a => a < 18)
console.log(result);

const mynames = [ 'Elias','Asabeneh', 'Mathias', 'Brook']
const result1 = mynames.find((name) => name.length > 7)
console.log(result1)

const score = scores.find(user => user.score > 80)
console.log(score)

// findIndex
const resul = names.findIndex((name) => name.length < 7)
console.log(resul)

// some
const areAllStr = names.some((name) => typeof name === 'number') 
console.log(areAllStr) 

// sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) 
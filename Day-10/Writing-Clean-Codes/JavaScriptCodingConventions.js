// Variables
let firstName = "kishore";
const PI = Math.PI;

console.log("Variables :", firstName);
console.log("Variables :", PI);

// Arrays
const number = [4, 5, 6, 7, 8, 9];
console.log("Array :", number);

// Functions
const fullName = (firstName, LastName) => {
  console.log("fullName :", firstName + " " + LastName);
};
fullName("Kishore", "Magi");

const square = (n) => {
  console.log("square :", n * n);
};
square(5);

const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};
console.log(showDateTime());

// Loops
let n = 10;
for (i = 0; i <= n; i++) {
  console.log("Loop :", i);
}

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// iterating an array using regular for loop
let len = names.length;
for (let i = 0; i < len; i++) {
  console.log(names[i].toUpperCase());
}
console.log("");
// iterating an array using for of
for (const name of names) {
  console.log(name.toUpperCase());
}
console.log("");
// iterating array using forEach
names.forEach((name) => console.log(name.toUpperCase()));
console.log("");

// Objects
// declaring object literal
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
// iterating through object keys
for (const key in person) {
  console.log(key, person[key]);
}

//Conditional
// if else
let num = 3;
if (num > 0) {
  console.log("Conditional :", num, "is a positive number");
} else {
  console.log("Conditional :", num, "is a negative number");
}

// Classes
// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const myName = new Person("Kishore", "Magi");
console.log(myName);

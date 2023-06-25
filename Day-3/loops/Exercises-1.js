// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("");

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("");

// Iterate 0 to n using for loop
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
console.log("");

// Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
  console.log(i, "*", i, "=", i * i);
}

// patten
for (let i = 1; i <= 5; i++) {
  console.log("#".repeat(i));
}

//Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
  console.log(i, i ** 2, i ** 3);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("even numbers", i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("odd numbers", i);
  }
}

// // Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0;
for (let i = 2; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(i);
  }
  count = 0;
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log("sum of all number", sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evens = 0;
let odds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evens = evens + i;
  } else {
    odds = odds + i;
  }
}
console.log("Sum of evens:", evens);
console.log("Sum of odds:", odds);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log([evens, odds]);

// random number
let num = 100;
let numbers = [];
for (let i = 0; i < 5; i++) {
  let value = Math.floor(Math.random() * num);
  numbers.push(value);
}
console.log("random number = ", numbers);

//Random number with while
let numb = 5;
let arr1 = [];
let j = 0;
while (j < numb) {
  let sum1 = Math.floor(Math.random() * 100);
  j++;
  arr1.push(sum1);
}
console.log("Random number with while", arr1);

//Random number with dowhile
let a = 5;
let emety = [];
let b = 0;
do {
  let sum = Math.floor(Math.random() * 100);
  emety.push(sum);
  b++;
} while (b < a);
{
}
console.log("Random number with dowhile", emety);

let namep = ["kishore", "love"];
if (namep.includes("akash")) {
  console.log("akash is here");
} else {
  console.log("akash is not here");
}

//Random uniqe number
let value = [];
for (i = 0; i < 6; i++) {
  let sum = Math.floor(Math.random() * 100);
  if (!value.includes(sum)) {
    value.push(sum);
  }
}
console.log("Quiqe number", value);

// random ID
let length = 6;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomId = "";
for (let i = 0; i < length; i++) {
  randomId =
    randomId + characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log("random ID = ", randomId);

// array each value length
const myname = ["coffe", "milk", "tea", "boots"];
const newarr = [];
for (let i = 0; i < myname.length; i++) {
  let newvalue = myname[i].length;
  newarr.push(newvalue);
}
console.log(newarr);

let emety2 = [];
let m = ["kishore", "kish", "magi", "looo", "5uuuu"];
for (let i = 0; i < m.length; i++) {
  let list = m[i];
  if (list == "magi") {
    console.log("change");
    emety2.push("change");
    continue;
  }
  emety2.push(list);
  // console.log(list);
}
console.log(emety2);

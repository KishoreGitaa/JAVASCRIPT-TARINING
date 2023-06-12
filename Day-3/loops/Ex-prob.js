// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i=0; i <=10; i++){
    console.log(i);
  }console.log("");

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i=10; i >=0; i--){
  console.log(i);
}console.log("");

// Iterate 0 to n using for loop
let n = 5
for (let i=0; i<=n; i++){
  console.log(i);
}console.log("");

// Use loop to print the following pattern:
for (let i=0; i<=10; i++ ){
  console.log(`${i} * ${i} = ${i * i}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// patten
for (let i = 1; i<=5; i++){
    console.log("#".repeat(i));
}

// random number
let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numbers);

// random ID

let idLength = 6;
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let randomId = '';
for (let i = 0; i < idLength; i++) {
  randomId += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomId);

// array each value length
const myname = ["coffe","milk","tea","boots"]
const newarr =[]
for (let i=0; i < myname.length; i++){
    newarr.push(myname[i].length)
}
console.log(newarr);
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
// // 0 to 9
// for (let i=0; i<=9;i++){
//     console.log(i);
// }
// console.log("");

// let number = 9
// let i=0
// while (i <= number){
//     console.log(i);
//     i++
// }

// let num = 5
// for (let i=1 ;i <= num; i++){
//     console.log("#".repeat(i));
// }

// // for(let i=1 ; i<=10; i+=5){
// //     console.log(i);
// // }

// let number =100
// let i=0;
// let emety=[]
// while (i <= number){
//     console.log(i);
//     i+=5
// }

// let num =20
// let a=0;
// do{
//     console.log(a);
//     a++
// }
// while(a<=20)

// 1000 / 3

let emety = [];
let number = 1000;
for (let i = 1; i <= number; i++) {
  if (i % 3 == 0) {
    // console.log(i);
    emety.push(i);
  }
}
console.log(emety, { maxArrayLength: null });

let myname = ["akash", "kishore", "nithiya"];
let rollnum = [01, 02, 03];
let length = myname.length;
for (let i = 0; i < length; i++) {
  // console.log(i);
  console.log(myname[i], "-", rollnum[i]);
}

let fruit = ["apple", "banana", "mango"];
let price = [10, 05, 15];
let quantity = [5, 2, 2];
let len = fruit.length;
let sum = 0;
for (let i = 0; i < len; i++) {
  console.log(fruit[i], "-", quantity[i], "=", price[i] * quantity[i]);
  sum = sum + price[i] * quantity[i];
}
console.log(sum);

const num = 4;
for (let i = 1; i <= num; i++) {
  const start = (i - 1) * 400 + 1;
  const end = i * 400;
  console.log(start + " to " + end, "words");
}

function compare(a, b) {
  const result = [];
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      result.push(a[i]);
    }
  }
  return result;
}
console.log(compare([1, 2, 3, 4, 5], [1, 3, 4, 5, 8]));


// function yourFilter (a, b){
//     let newArr = [];
//     for(let i=0;i<a.length;i++){
//         let odds = a[i]
//         if(b(odds)){
//             newArr.push(a[i])
//         }
//     }
//     return newArr;
// }

// const nums = [1,2,3,4,5,6,7]
// const evenNums = yourFilter(nums, num => num % 2 !== 0)
// console.log(evenNums)

function yourMap(num, multi) {
  let sum = [];
  for (let i = 0; i < num.length; i++) {
    let value = num[i];
    sum.push(multi(value));
  }
  return sum;
}

const number = [1, 2, 3, 4, 5];
let result = yourMap(number, (num) => num * num * num);
console.log(result);

// 1. what is the input and output of filter function?
//     first input of filter function is array.
//     second input of filter function is function.

//     Return type of filter function is array.

// Tasks

// 1. what is the input and output of map function?
//     first input of map function is array.
//     second input of map function is function.

//     Return type of map function is array.

// 2. define the function "yourMap" and call it

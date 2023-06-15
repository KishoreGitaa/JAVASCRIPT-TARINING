// // Function Declaration
// function myName(){

// }
// myName()

// // Function without a parameter and return
// function number (){
//     let a = 3
//     let b = 47
//     let add = a+b
//     console.log(add);
// }
// number()

// function multi(){
//     let a=9
//     let b=8
//     let sum = a*b
//     console.log(sum);
// }
// multi()

// // Function returning value
// function myName(){
//     firstName = "kishore"
//     lastName= "magi"
//     space = " "
//     let fullName = firstName+space+lastName
//     return fullName
// }
// console.log(myName());

// function addTwoNumber (){
//     let a = 10
//     let b = 11
//     let sum = a + b
//     return sum 
// }
// console.log("Add two number =",addTwoNumber());

// // Function with a one parameter

// function add(a){
//     let add = a + a
//     return add
// }
// console.log("add number =",add(9));

// // Function with a two parameter
// function sum(x,y){
//     let value = x*y
//     return value 
// }
// console.log("sum",sum(10,8));

function sumArrayValues(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
       sum = sum + arr
       
    }
    return sum
  }
console.log(sumArrayValues("10"))

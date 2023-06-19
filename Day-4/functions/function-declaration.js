// Function Declaration
function myName(){

}
myName()

// Function without a parameter and return
function number (){
    let a = 3
    let b = 47
    let add = a+b
    console.log(add);
}
number()

function multi(){
    let a=9
    let b=8
    let sum = a*b
    console.log(sum);
}
multi()

// Function returning value
function myName(){
    firstName = "kishore"
    lastName= "magi"
    space = " "
    let fullName = firstName+space+lastName
    return fullName
}
console.log(myName());

function addTwoNumber (){
    let a = 10
    let b = 11
    let sum = a + b
    return sum 
}
console.log("Add two number =",addTwoNumber());

// Function with a one parameter

function add(a){
    let add = a + a
    return add
}
console.log("add number =",add(9));

// Function with a two parameter
function sum(x,y){
    let value = x*y
    return value 
}
console.log("sum",sum(10,8));


function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log("sum Two Numbers",sum);
}
sumTwoNumbers(10, 20) 

// Function with many parameters
let value = 10
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [];
for (let i=1; i <= value; i++){
  numbers.push(i)
}
console.log("sum Array Values",sumArrayValues(numbers));


const areaOfCircle = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
}
console.log(areaOfCircle(10))

// Expression Function

// Function expression
const square = function(n) {
  return n * n
}
console.log(square(2)) 

// Arrow Function
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// Function with default parameters
function greetings(name = 'Peter') {
  let message = name + ", welcome to 30 Days Of JavaScript!"
  return message
}
console.log(greetings())
console.log(greetings('Asabeneh'))

// With arrow function
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}
console.log(greetings())
console.log(greetings('Asabeneh'))

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' 
  return weight
}
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

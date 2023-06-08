// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
let a=2
let b=3
if (a > b){
    console.log(a+" is a greater than "+b);
}else{
    console.log(a+" is a less than "+b);
}

let value = a > b ? a+ " is a greater than " +b : a+ " is a less than " +b
console.log(value);


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = 3
if (number / 2 == 0){
    console.log(number + " is an even number ");
}else{
    console.log(number + " is  an old number ");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
var userInput = "september";

var month = userInput.toLowerCase();
var season;

if (month === "september" || month === "october" || month === "november") {
  season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
  season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
  season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
  season = "Summer";
} else {
  season = "Invalid month";
}

console.log("The season is " + season);

// Check if a day is weekend day or a working day. Your script will take day as an input.
let Input = "Saturday"
let day = Input.toLowerCase()
let isWeekend
 if (day === "Saturday" || day === "Sunday"){
    isWeekend=true
 }else {
    isWeekend=false
 }
 if (isWeekend){
    console.log(day.concat(" is a weekend"));
 }else{
    console.log(day.concat(" is a working Days"));

 }


//Write a program which tells the number of days in a month.
var userInput = "JANURY"

var month = userInput.toLowerCase() || userInput.toUpperCase();
var result;

if (month === "january" || month==="march" || month ==="may" || month=== "july" || month=== "August" || month === "October" || month === "december"){
    result = "31 Days";
} else if (month === "April" || month==="June" || month ==="may" || month=== "September" || month=== "November" ){
    result == " 30 Days";
} else if (month === "February"){
    result = "28" 
}
else {
    result = "invalid Month"
}

console.log(userInput.toLowerCase() +" "+"has"+" "+result);

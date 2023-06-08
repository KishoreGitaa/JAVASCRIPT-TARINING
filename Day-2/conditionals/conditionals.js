// if
let num = 3
 if (num >0) {
     console.log(`${num} is a positive number`)
}

let isLightOn = true
 if (isLightOn) {
     console.log("remeber to off the light")
}

// if else

let num1 =10
if ( num1 >5 ) {
    console.log(`${num1} is greater than 5`);
}
else{
    console.log(`${num1} is lessthan 5`);
}

let num2 =3
if ( num2 >5 ) {
    console.log(`${num1} is greater than 5`);
}
else{
    console.log(`${num1} is lessthan 5`);
}

// If Else if Else
let festival = "diwali"
if (festival === "diwali"){
    console.log(`${festival} Go and celebrate with crackers`);
}  else if (festival === "christmac") {
    console.log(`${festival} Celebrate with Gift`);
}   else if (festival === "pongal" ){
    console.log(`${festival} celebrate with pongal`);
}   else {
    console.log("No festival");
}

// 
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


// switch case

// let dayUserInput = prompt("what day is today")
let dayUserInput = "MONDAY"
let day = dayUserInput.toLowerCase()

switch(day){
    case 'monday':
    console.log('Today is Monday')
    break
    case 'tuesday':
    console.log('Today is Tuesday')
    break
    case 'wednesday':
    console.log('Today is Wednesday')
    break
    case 'thursday':
    console.log('Today is Thursday')
    break
    case 'friday':
    console.log('Today is Friday')
    break
    default:
        console.log("It is not a week");
}

// Ternary 

let Number =5
let Value = Number > 0 ? `${Number} is a positive number` : `${Number} is a nagative number`
console.log(Value);

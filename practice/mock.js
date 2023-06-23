// let string = "Kishore"
// let string2 = "magi666"

// // access a char
// console.log(string[0]);
// // concat
// console.log(string.concat("kishore","magi"));
// console.log(string.concat(string2));
// let join = string + string2
// console.log(join);

// // startswith
// console.log(string.startsWith("kis"));
// // endswith
// console.log(string.endsWith("ore"));
// // replace
// console.log(string.replace(string,string2));
// // length of a string
// console.log(string.length);

// // Search a char in a string
// console.log(string.search("l"));

// // Find the sub-string in a given string
// console.log(string.substring(2));

// // Convert the string to lowercase
// console.log(string.toLowerCase());

// // Convert the string to upper case
// console.log(string.toUpperCase());

// // // DAY-2

// // // alert 
// // let userInput = prompt("enter the number")
// // if( userInput > 5){
// //     alert("Greter than 5")
// // }

// // let userInput1 = prompt("enter the number")
// // if( userInput1 > 5){
// //     alert("Greter than 5")
// // }else{
// //     alert("less than 5")
// // }

// // let current = "off" 
// // if (current === "on"){
// //     console.log("light on");
// // }
// // else
// // {
// //     console.log("light off");
// // }

// // let userInput2 = '5'
// // if( userInput2 > 5){
// //     alert("Greter than 5")
// // }else if (5==='5'){
// //     alert("equal to 5")
// // } else {
// //     alert("less than 5")
// // }

// // arithmetic

// let a1=11
// let b1=10

// let num = a1 > b1 ? "this greate than ":"less than"
// console.log(num);


// // Date
// let now = new Date()
// let Y = now.getYear()
// let M = now.getMonth()
// let D = now.getDate()
// let H = now.getHours()
// let MI = now.getMinutes()
// console.log(M)
// console.log(Y)
// console.log(D)
// console.log(H)
// console.log(MI);

// console.log(now.toDateString());

// switch
let input = 16
switch (true)
{
    case input < 10 :
        console.log( "is grater than 5"); 
    break;
    case input < 20:
        console.log( "is grater than 10"); 
    break;
    case input < 30:
        console.log( "is grater than 20"); 
    break;
   
}

let a=5
let ans = a++ + ++a - --a
let b = ans
let c = (b==4) ?"ok":"not ok"
console.log(c);
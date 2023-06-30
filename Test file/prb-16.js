// Problem 16: Write a JavaScript program to divide two numbers.
// The program should use a try-catch block to handle the error if the denominator
// is 0.
// The program should print an error message if the denominator is 0.

let number = 2
try {
    if(number % 2 == 0){
        console.log("the denominator",number, "is 0");
    }
 } catch (err) {
    console.log(err);
  }
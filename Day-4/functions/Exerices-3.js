// Function to generate a random RGB color
  function rgbColorGenerator() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }
  console.log(rgbColorGenerator());
  
  // Function to generate an array of random RGB colors
  function arrayOfRgbColors(numColors) {
    var result = [];
    for (var i = 0; i < numColors; i++) {
      result.push(rgbColorGenerator());
    }
    return result;
  }
  console.log("arrayOfRgbColors",arrayOfRgbColors(3));
  
  // Function to convert a hexadecimal color to RGB
  function convertHexaToRgb(hexColor) {
    var red = parseInt(hexColor.substring(1, 3), 16);
    var green = parseInt(hexColor.substring(3, 5), 16);
    var blue = parseInt(hexColor.substring(5, 7), 16);
  
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }
  console.log("convertHexaToRgb",convertHexaToRgb("#a3e12f"));
  
  // Function to calculate the factorial of a number
  function factorial(number) {
  let total =1
  for (let i = 0; i < number; i++){
    total = total * (number -i)
  }
  return total
}
console.log("Factorial",factorial(5));

  // Function to calculate the fibonacci of a number
  function fibonacci(number){
   let n1 = 0;
   let n2 = 1;
   let sum;
   for (i = 0; i < number; i++){
    console.log(n1);
   sum = n1;
   n1 = n2;
   n2 = sum + n1
  }
  return n1
  }
  console.log("Fibonacci",fibonacci(5));


  // Function to check if a variable is empty
  function isEmpty(value) {
    if (value === undefined || value === null || value === "") {
      return true;
    } else {
      return false;
    }
  }
  console.log("Function to check if a variable is empty",isEmpty(""));
  console.log("Function to check if a variable is empty",isEmpty("Hello"));
  
  // Function to calculate the sum of numbers
  function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  console.log("calculate the sum of numbers",sum(1, 2, 3, 4, 5));
  
  // Function to calculate the sum of array items
  function sumOfArrayItems(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return "Array contains non-number elements.";
      }
      sum += array[i];
    }
    return sum;
  }
  console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
  console.log(sumOfArrayItems([1, 2, "3", 4, 5]));
  
  // Function to calculate the average of array items
  function average(array) {
    var sum = 0;
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return "Array contains non-number elements.";
      }
      sum += array[i];
    }
  
    return sum / array.length;
  }
  
  console.log(average([1, 2, 3, 4, 5]));
  console.log(average([1, 2, "3", 4, 5]));
  
  // Function to modify the fifth item of an array
  function modifyArray(array) {
    if (array.length >= 5) {
      array[4] = array[4].toUpperCase();
      return array;
    } else {
      return "Item not found";
    }
  }
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
  
//   // Function to check if a number is prime
//   function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(isPrime(7));
//   console.log(isPrime(10));
  
  // Function to check if all items in an array are unique
  function areAllItemsUnique(array) {
    var uniqueItems = new Set(array);
    return uniqueItems.size === array.length;
  }
  console.log("areAllItemsUnique",areAllItemsUnique([1, 2, 3, 4, 5]));
  console.log("areAllItemsUnique",areAllItemsUnique([1, 2, 3, 4, 4]));
  
  // Function to generate an array of seven random numbers in the range of 0-9
  function sevenRandomNumbers() {
    let numbers = [];
    while (numbers.length < 7) {
      let randomNum = Math.floor(Math.random() * 10);
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }
  console.log(sevenRandomNumbers());
  
  // Function to reverse an array
  function reverseCountries(countries) {
    let reversedCountries = [];
    for (let i = countries.length - 1; i >= 0; i--) {
      reversedCountries.push(countries[i]);
    }
    return reversedCountries;
  }
  console.log(reverseCountries(["USA", "Canada", "Mexico"]));

    let number = [5, 2, 2, 3, 3,4,4]
    let result = [];  
    for (let i = 0; i < number.length; i++) {
      if (number[i] !== number[i+1] && number[i] !== number[i-1] ) {  
        result.push(number[i])
      }
    }
    console.log(result);
  
  

  
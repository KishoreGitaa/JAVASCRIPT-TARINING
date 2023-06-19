// // Solve linear equation
// function solveLinEquation(a, b, c) {
//     return (-c - b) / a;
//   }
//   console.log(solveLinEquation(2, 3, 1));
  
//   // Solve quadratic equation
//   function solveQuadEquation(a, b, c) {
//     const discriminant = b * b - 4 * a * c;
//     if (discriminant > 0) {
//       const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//       const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//       return [x1, x2];
//     } else if (discriminant === 0) {
//       const x = -b / (2 * a);
//       return [x];
//     } else {
//       return [];
//     }
//   }
//   console.log(solveQuadEquation());
//   console.log(solveQuadEquation(1, 4, 4));
//   console.log(solveQuadEquation(1, -1, -2));
//   console.log(solveQuadEquation(1, 7, 12));
//   console.log(solveQuadEquation(1, 0, -4));
//   console.log(solveQuadEquation(1, -1, 0));

  
  // Print array values
  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  printArray([1, 2, 3, 4, 5]);
  printArray(['A', 'B', 'C']);

  // Show date and time
  function showDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    console.log(date,time);
  }
showDateTime();
 
  // Swap values
  function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log("x =", x, "y = ",y);
  }
  swapValues(3, 4);
  swapValues(4, 5);

  // Exercise 6: Reverse an array
  function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  console.log(reverseArray([1, 2, 3, 4, 5]));
  console.log(reverseArray(['A', 'B', 'C']));
  
  // Capitalize array values
  function capitalizeArray(arr) {
    let capitalizedArray = [];
    for (let i = 0; i < arr.length; i++) {
      capitalizedArray.push(arr[i].toUpperCase());
    }
    return capitalizedArray;
  }
  console.log(capitalizeArray(['apple', 'banana', 'cherry']));
  
  // Add item to an array
  function addItem(arr, item) {
    arr.push(item);
    return arr;
  }
  console.log(addItem([1, 2, 3], 4));
  
  // Remove item from an array
  function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
  }
  console.log(removeItem([1, 2, 3, 4], 2));
  
  // Sum of numbers in a range
  function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumOfNumbers(5));
  
  // Sum of odd numbers in a range
  function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumOfOdds(10));

  //Sum of even numbers in a range
  function sumOfEven(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumOfEven(10));
  
  // Count evens and odds in a number
  function evensAndOdds(number) {
    let evens = 0;
    let odds = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        evens++;
      } else {
        odds++;
      }
    }
    console.log("The number of odds are" ,odds);
    console.log("The number of evens are" ,evens);
  }
  evensAndOdds(100);

  // Sum of arbitrary number of arguments
  function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(sum(1, 2, 3));
  console.log(sum(1, 2, 3, 4));

  // Exercise 15: Generate random user IP
  function randomUserIp() {
    const randomIp =  Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256);
    return randomIp;
  }
  console.log("Random IP address" , randomUserIp());

  // Generate random MAC address
  function randomMacAddress() {
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
      macAddress += Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      if (i !== 5) {
        macAddress += ':';
      }
    }
    return macAddress;
  }
  console.log("Random MAC address",randomMacAddress());
 
  // Generate random hexadecimal number
  function randomHexaNumberGenerator() {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    return randomHex;
  }
  
  console.log("Random hexadecimal number in the format ","#",randomHexaNumberGenerator());

  // Generate random 7-character ID
  function userIdGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    for (let i = 0; i < 7; i++) {
      userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return userId;
  }
  console.log("Random 7-character ID",userIdGenerator());
 
  
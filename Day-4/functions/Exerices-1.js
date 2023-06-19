//Print full name
function fullName() {
    console.log("Your Full Name");
  }
  fullName();
  
  //  Return full name
  function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  console.log(fullName("John", "Doe"));
  
  //  Sum two numbers
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  console.log(addNumbers(5, 10));
  
  // Area of a rectangle
  function areaOfRectangle(length, width) {
    return length * width;
  }
  console.log(areaOfRectangle(4, 6));
  
  // Perimeter of a rectangle
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  console.log(perimeterOfRectangle(4, 6));
  
  // Volume of a rectangular prism
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  console.log(volumeOfRectPrism(3, 4, 5));

  // Area of a circle
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  console.log(areaOfCircle(2));
  
  // Circumference of a circle
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  console.log(circumOfCircle(2));
  
  // Density
  function density(mass, volume) {
    return mass / volume;
  }
  console.log(density(100, 20));
  
  // Speed
  function speed(distance, time) {
    return distance / time;
  }
  console.log(speed(500, 2));
  
  // Weight
  function weight(mass, gravity) {
    return mass * gravity;
  }
  console.log(weight(70, 9.8));
  
  // Convert Celsius to Fahrenheit
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  console.log(convertCelsiusToFahrenheit(25));
  
  // Body Mass Index (BMI)
  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  console.log(calculateBMI(75, 1.8));
  
  // Check Season
  function checkSeason(month) {
    if (month >= 3 && month <= 5) {
      return "Spring";
    } else if (month >= 6 && month <= 8) {
      return "Summer";
    } else if (month >= 9 && month <= 11) {
      return "Autumn";
    } else {
      return "Winter";
    }
  }
  console.log(checkSeason(6));
  
  // Find maximum without using Math.max
  function findMax(a, b, c) {
    let max = a;
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max;
  }
  console.log(findMax(0, 10, 5));    
  console.log(findMax(0, -10, -2));  
  
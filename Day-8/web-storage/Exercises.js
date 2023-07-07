// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "John");
localStorage.setItem("lastName", "Doe");
localStorage.setItem("age", "25");
localStorage.setItem("country", "USA");
localStorage.setItem("city", "New York");

// Exercises: Level 2
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript"],
  country: "USA",
  enrolled: true,
};

const studentJSON = JSON.stringify(student);
localStorage.setItem("student", studentJSON);

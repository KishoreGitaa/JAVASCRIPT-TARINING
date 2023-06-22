const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// Find the person who has many skills in the users object.
let personName = "";
let skillsCount = 0;

for (let person in users) {
  const count = users[person].skills.length;
  if (count > skillsCount) {
    skillsCount = count;
    personName = person;
  }
}
console.log(personName, "is having", skillsCount, "skills");

// Count logged in users, count users having greater than equal to 50 points from the following object.
let numberofvalue = 0;
for (let person in users) {
  const count = users[person].points;
  if (count >= 50) {
    numberofvalue++;
    console.log(person, "is having 50 points");
  }
}
console.log("Total of 50 points member is ", numberofvalue);

// Find people who are MERN stack developer from the users object
let MERN = [];
for (let person in users) {
  const value = users[person].skills;
  if (
    value.includes("MongoDB") &&
    value.includes("Express") &&
    value.includes("React") &&
    value.includes("Node")
  ) {
    MERN.push(person);
  }
}
console.log(MERN);

// Set your name in the users object without modifying the original users object
const updatedUsers = {
  ...users,
  Kishore: {
    email: "kishore1999kumar.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 23,
    isLoggedIn: true,
    points: 90,
  },
};
console.log(updatedUsers);

// Get all keys or properties of users object
for (let person in users) {
  const keyss = Object.keys(users[person]);
  console.log(keyss);
}

// Get all the values of users object
for (let perosn in users) {
  const values = Object.values(users[perosn]);
  console.log(values);
}

const countries = {
  countryName: "india",
  capital: "Delhi",
  populations: "100",
  languages: "hindi",
};
console.log(countries);

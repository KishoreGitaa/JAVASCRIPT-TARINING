// defining a classes

// syntax
class ClassName {
  //  code goes here
}

// Class Instantiation
class Person {
  // code goes here
}
const person = new Person();
console.log(person);

//   Class Constructor
class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const personName = new Person1();
console.log(personName);
const personna = new Person1("Asabeneh", "Yetayeh");
console.log(personna);

// Default values with constructor

class PersonDet {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new PersonDet(); // it will take the default values
const person2 = new PersonDet("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person1);
console.log(person2);

//   Class methods
class PersonF {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person3 = new PersonF("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person4 = new PersonF("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person3.getFullName());
console.log(person4.getFullName());

// Properties with initial value
console.log(person3.score);
console.log(person4.score);

console.log(person3.skills);
console.log(person4.skills);

// getter
console.log(person3.getScore); // We do not need parenthesis to call a getter method
console.log(person4.getScore);

console.log(person3.getSkills);
console.log(person4.getSkills);

// setter
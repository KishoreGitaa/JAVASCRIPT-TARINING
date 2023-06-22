// Creating an objecting with values

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle);

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  skills: ["HTML", "CSS"],
  isMarried: true,
};
console.log(person);
console.log("");

// Getting values from an object
const person1 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "D3.js"],
  phonenumber: "+3584545454545",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getFullName: function () {
    return `${person1.firstName} ${person1.lastName}`
  },
};
// accessing values using .
console.log("person1", person1.firstName);
console.log("person1", person1.lastName);
console.log("person1", person1.age);
console.log("person1", person1.location); // undefined
console.log("");
// value can be accessed using square bracket and key name
console.log("person1", person1["firstName"]);
console.log("person1", person1["lastName"]);
console.log("person1", person1["age"]);
console.log("person1", person1["age"]);
console.log("person1", person1["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log("person1", person1["phonenumber"]);

//  Creating object methods
console.log("");
console.log("reating object methods =", person1.getFullName());

// Object Methods
// Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
function getFullName(person1) {
  return `I am ${person1.firstName} and I live in ${person1.city}, ${person1.country}. I am ${person1.age}.`;
}
const copyPerson = Object.assign({}, person1);
console.log(getFullName(copyPerson));

// Getting object keys using Object.keys()
const keys = Object.keys(person1);
console.log("Getting object keys using Object.keys()", keys);
const address = Object.keys(person1.address);
console.log("Getting object keys using Object.address()", address);

// Getting object values using Object.values()
const values = Object.values(person1);
console.log("Getting object values using Object.values()", values);

// Getting object keys and values using Object.entries()
const entries = Object.entries(person);
console.log("object keys and values using Object.entries()", entries);

// Checking properties using hasOwnProperty()
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('score'))

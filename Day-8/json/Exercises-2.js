// Stringify the students object with only firstName, lastName and skills properties
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const students = {
  firstName: student.firstName,
  lastName: student.lastName,
  skills: student.skills,
};

const studentsJSON = JSON.stringify(students);
console.log(studentsJSON);

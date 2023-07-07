function stringIsEqual(a, b) {

  // construct the A Map
  const aMap = new Map();
  for (let char of a) {

    if (aMap.has(char)) {
      let charCount = aMap.get(char);
      aMap.set(char, charCount + 1);
    }
    
    else {
      aMap.set(char, 1);
    }
  
  }

  // construct the B Map
  const bMap = new Map();
  for (let char of b) {

    if (bMap.has(char)) {
      let charCount = bMap.get(char);
      bMap.set(char, charCount + 1);
    }
    
    else {
      bMap.set(char, 1);
    }
  
  }


  let aKeys = aMap.keys();
  let bKeys = bMap.keys();

  // Check if all keys in a are in b
  for (let k of aKeys) {
    if (!bMap.has(k)) {
      return false;
    }
  }

  // Check if all keys in b are in a
  for (let k of bKeys) {
    if (!aMap.has(k)) {
      return false;
    }
  }

  // Check count of all keys are equal
  for (let k of aKeys) {
    if (aMap.get(k) != bMap.get(k)) return false
  }

  return true;

}


let ans = stringIsEqual("abc", "cab");
console.log(ans);

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(2, 4, 7, 8, 9,8)
// console.log(numbers.splice(2, 4, 7, 8, 9,8))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

let value = 10
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [];
for (let i=1; i <= value; i++){
  numbers.push(i)
}
console.log("sum Array Values",sumArrayValues(numbers));


const areaOfCircle = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
}
console.log(areaOfCircle(10))


//Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  console.log(formattedSkills);
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))
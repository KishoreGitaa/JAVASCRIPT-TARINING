let space = ' ' 
let firstName = 'kishore'
let lastName = 'magi'
let age =23
let country = 'india'
let city = 'chennai'
let language = 'JavaScript'
let job = 'IT'

let fullName = firstName + space + lastName
console.log(fullName);

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country 
console.log(personInfoOne)

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
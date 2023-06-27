// Creating an empty set
const companie = new Set()
console.log(companie)

// Creating set from array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// Adding an element to a set
const companies1 = new Set()
console.log(companies1.size)

companies1.add("Google")
companies1.add("Road")
companies1.add("Map")
console.log(companies1);
console.log(companies1.size,"elements in the set")

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
console.log(setOfCompanies);

// Deleting an element a set
console.log(setOfCompanies.delete('Google'))
console.log(setOfCompanies.size) 
console.log(setOfCompanies) 
 
// Checking an element in the set
console.log(setOfCompanies.has('Apple')) 
console.log(setOfCompanies.has('Facebook'))

// Clearing the set
console.log("before Clearing",setOfCompanies);
setOfCompanies.clear()
console.log("after Clearing",setOfCompanies);
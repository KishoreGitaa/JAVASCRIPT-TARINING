// Exercise: Level 3
// The following is an array of 10 students ages
const ages = [19, 22, 17, 28, 20, 25, 26, 24, 75, 10]
let sort = ages.sort()
console.log(sort);
// Sort the array and find the min and max age
let minage = sort[0]
console.log("min age",minage);
let age = sort.length -1
let maxage = sort[age]
console.log("max age",maxage);
// Find the average age(all items divided by number of items)
const middleIndex = Math.floor(ages.length / 2);
if (middleIndex % 2 == 0){
  console.log(ages[middleIndex])
}else{
  console.log(ages[middleIndex-1],ages[middleIndex])
}
// Find the average age
const average = ages.length -1
console.log("Total index",average);
const add = ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9]
const averageresult = add/average
console.log("average",averageresult);
// Find the range of the ages(max minus min)
console.log(sort)
console.log("min age",minage);
console.log("max age",maxage);
let range = maxage - minage
console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
let minaverage = Math.abs(minage - averageresult)
let maxaverage = Math.abs(maxage - averageresult)
console.log("minaverage",minaverage);
console.log("maxaverage",maxaverage);

const countries = ["india-1","india-2","india-3","india-4","india-5","india-6","india-7","india-8","india-9","india-10","india-11","india-12"]
let firstTenContries = countries.slice(0,10)
console.log(firstTenContries);

const middleCountries = countries.length / 2
if (middleCountries % 2 == 0){
    console.log(countries[middleCountries]);
}else{
    console.log(countries[middleCountries-1],countries[middleCountries]);
}

const halfLength = Math.round(countries.length / 2);
const firstHalf = countries.slice(0, halfLength);
const secondHalf = countries.slice(halfLength);

console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);
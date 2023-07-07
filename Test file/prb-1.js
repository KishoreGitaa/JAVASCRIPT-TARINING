// ● Problem 1: Write a JavaScript program to determine the day of the week for a given date.
// Input: "2023-06-29"
// Output: "Thursday"
// Input: "2022-12-25"
// Output: "Sunday"

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let now = new Date("2022-12-25")
const dayOfWeek = now.getDay()
console.log(daysOfWeek[dayOfWeek])


// console.log(now.toDateString("2022-12-25"));
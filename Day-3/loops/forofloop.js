//  for of loop
const number = [1,2,3,4,5]
for (num of number){
    console.log(num);
}
console.log("");
for (num of number){
    console.log(num * num);
}
console.log("");

sum = 0 
for (num of number){
    sum = sum +num
}
console.log(sum);
console.log("");

const myname = ["coffe","milk","tea","boots"]
for( names of myname){
    console.log(names[0]);
}
console.log("");

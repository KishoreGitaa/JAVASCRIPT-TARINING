// for loop
for (let i=0; i<=5; i++){
    console.log(i);
}

for (let i=0; i<=10; i++ ){
    console.log(`${i} * ${i} = ${i * i}`);
}

const myname = ["coffe","milk","tea","boots"]
const newarr =[]
for (let i=0; i < myname.length; i++){
    newarr.push(myname[i].toUpperCase())
}
console.log(newarr);

const number = [1,2,3,4,5,6]
let sum = 0
for (let i = 0; i < number.length; i++){
    sum = sum + number[i]
}
    console.log(sum);


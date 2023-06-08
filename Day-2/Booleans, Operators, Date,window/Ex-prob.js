let a = 50
let b = 30 
 
let add = a+b
let value = add
console.log(value);

let sub = value-a
console.log(sub);

let div = sub / 2
console.log(div);

let adding = div+1
console.log(adding);

let answer = adding
console.log(answer);

let number = answer
let message = answer > 20 ?("ok"):("not ok")
console.log(message); 

let a1=11
let b1=10

let num = a1 > b1 ? "this greate than ":"less than"
console.log(num);

let now = new Date()
let M = now.getMonth()
let D = now.getDate()
let H = now.getHours()
let MI = now.getMinutes()
console.log(M)
console.log(D)
console.log(H)
console.log(MI);

console.log(M,D,H,MI);


let input = 16
switch (true)
{
    case (input <=10 ):
        console.log( "is grater than 5"); 
    break;
    case (input <= 20 ):
        console.log( "is grater than 10"); 
    break;
    case (input <= 30 ):
        console.log( "is grater than 20"); 
    break;
   
}
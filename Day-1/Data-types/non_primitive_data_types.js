let num = [1, 2, 3]
num[0] = 10
console.log(num) 

let nums = [1, 2, 3]
let number = [1, 2, 3]
console.log(nums == number) 

let numbers = nums
console.log(nums == numbers)  

let userOn = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTw = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOn == userTw) 


let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo = userOne
console.log(userOne == userTwo) 
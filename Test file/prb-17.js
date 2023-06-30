// Problem 17: Write a function that takes an array of numbers as input and returns the
// sum of all the even numbers in the array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12
// Input: [10, 11, 12, 13, 14, 15]
// Output: 36
// Input: [2, 4, 6, 8, 10]
// Output: 30

function result (number){
    let sum = 0
    for (let i = 0 ; i<number.length;i++){
        let add = number[i]
        if(add % 2 ==0){
            sum += number[i]
        }
    }
    return sum
}
let input1 = [1, 2, 3, 4, 5, 6]
let input2 = [10, 11, 12, 13, 14, 15]
let input3 = [2, 4, 6, 8, 10]
console.log(result(input1))
console.log(result(input2))
console.log(result(input3))

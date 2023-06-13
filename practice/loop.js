
// // for(let i=1 ; i<=10; i+=5){
// //     console.log(i);
// // }

// let number =100
// let i=0;
// let emety=[]
// while (i <= number){
//     console.log(i);
//     i+=5
// }

// let num =20
// let a=0;
// do{
//     console.log(a);
//     a++
// }
// while(a<=20)


// 1000 / 3

let emety = []
let number = 1000
for (let i=1; i<=number; i++){
    if (i % 3 == 0 ){
        // console.log(i);
        emety.push(i)
    }
}
console.log(emety, {'maxArrayLength': null});
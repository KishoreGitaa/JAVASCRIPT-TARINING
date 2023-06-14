// // Write a script which generates a random rgb color number.
// let rgb =[]
// let color1=[]
// let color2=[]
// let color3=[]
// color1.push(Math.floor(Math.random()*1000))
// color2.push(Math.floor(Math.random()*1000))
// color3.push(Math.floor(Math.random()*1000))
// console.log(color1);
// console.log(color2);
// console.log(color3);
// rgb.push(color1,color2,color3);
// console.log("rgb (",rgb.toString(),")");

// Using the  countries array, create the following new array.
let emety=[]
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// for (let i=0;i<countries.length;i++){
//     let list = countries[i]
//     emety.push(list.toUpperCase())
    
// // Using the  countries array, create an array for countries length'.
//     console.log(countries[i].length);
// }
// console.log(emety);

// Use the countries array to create the following array of arrays:
// let addarr=[]
// for (i=0;i<countries.length;i++){
//     let name = countries[i]
//     console.log(name);
//     addarr.push(name)

//     let firstthreeletter= name.slice(0,3);
//     addarr.push(firstthreeletter.toUpperCase())
//     console.log(firstthreeletter);
    
//     let length =countries[i].length
//     addarr.push(length)
//     console.log(length);
// }
// console.log(addarr);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let find =[]
    for (let i of countries){
        if(i.includes("land")){
            find.push(i)
            // console.log(i);
        }
    }
    if (find.length > 0) {
        console.log(find);
    }else {
        console.log('All these countries are without land');
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let find1 =[]
    for (let i of countries){
        if(i.includes("ia")){
            find1.push(i)
            // console.log(i);
        }
    }
    if (find1.length > 0) {
        console.log(find1);
    }else {
        console.log('All these countries are without land');
}
// Using the above countries array, find the country containing the biggest number of characters.
let big =[]

for (let i=0;i<countries.length;i++){

    let length =countries[i].length
    // console.log(length);
    big.push(length)

}
let findbig = big.sort()
let mixi = findbig.length -1
let value = findbig[mixi]
console.log(value);
for (let i=0;i<countries.length;i++){
    if(value == countries[i].length){
        console.log(countries[i]);
    }
}








// Write a script which generates a random rgb color number.
let rgb =[]
let color1=[]
let color2=[]
let color3=[]
color1.push(Math.floor(Math.random()*1000))
color2.push(Math.floor(Math.random()*1000))
color3.push(Math.floor(Math.random()*1000))
console.log(color1);
console.log(color2);
console.log(color3);
rgb.push(color1,color2,color3);
console.log("rgb (",rgb.toString(),")");

// Using the  countries array, create the following new array.
let emety=[]
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
for (let i=0;i<countries.length;i++){
    let list = countries[i]
    emety.push(list.toUpperCase())
    
// Using the  countries array, create an array for countries length'.
    console.log(countries[i].length);
}
console.log(emety);

// Use the countries array to create the following array of arrays:
let addarr=[]
for (let i of countries){
    addarr.push([i,i.slice(0,3),i.length])
}
console.log(addarr);

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
for (let i=0;i<countries.length;i++){
    if(value == countries[i].length){
        console.log(countries[i]);
    }
}

// Using the above countries array, find the country containing only 5 characters.
let lessfivecharacters =[]
for (let i=0; i<countries.length; i++){
    let length = countries[i].length
    if(length == 5){
        lessfivecharacters.push(countries[i])
    }
}
console.log("5 characters countries ",lessfivecharacters);

// Find the longest word in the webTechs array
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
let longword = ''
for(let i=0;i<webTechs.length;i++){
    if(webTechs[i].length > longword.length){
        longword = webTechs[i]
    }
}
console.log("longest word in the webTechs array = ",longword);

// Use the webTechs array to create the following array of arrays:
let arr1 = []
    for (let i of webTechs){
        arr1.push([i,i.length]) 
    }
console.log(arr1);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
for(let i of array){
    console.log(i);
}

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let array4 = ''
let course = ["MongoDB", "Express", "React" , "Node"]
for (i of course){
    array4 += i[0]
}
console.log("acronym MERN by using the array mernStack = ",array4);

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon']
let reverse =[]
for (let i=fruit.length-1; i>=0;i--){
    reverse.push(fruit[i])
}
console.log(reverse);

// Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (let i of fullStack){
    for (let a of i)
    console.log(a);
}
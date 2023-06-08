// empty array
const arr = Array()
console.log(arr);

const arr1 = []
console.log([]);


// array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] 
const fruits = ['banana', 'orange', 'mango', 'lemon'] 
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] 
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] 
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] 
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] 

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Array can have items of different data types
const arr2 = [
    'Kishore',
    250,
    true,
    { country: 'india', city: 'tamilnadu' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr2)
// Creating an empty Map
let emety = new Map()
console.log(emety);

// Creating an Map from array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

//   Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Kishore', 'magi')
console.log(countriesMap)
console.log(countriesMap.size)

// Getting a value from Map
console.log(countriesMap.get('Finland'))

// Checking key in Map
console.log(countriesMap.has('Finland'))


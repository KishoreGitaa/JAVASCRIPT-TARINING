let string = "Kishore"
let string2 = "magi666"

// access a char
console.log(string[0]);
// concat
console.log(string.concat("kishore","magi"));
console.log(string.concat(string2));
let join = string + string2
console.log(join);

// startswith
console.log(string.startsWith("kis"));
// endswith
console.log(string.endsWith("ore"));
// replace
console.log(string.replace(string,string2));
// length of a string
console.log(string.length);

// Search a char in a string
console.log(string.search("l"));

// Find the sub-string in a given string
console.log(string.substring(2));

// Convert the string to lowercase
console.log(string.toLowerCase());

// Convert the string to upper case
console.log(string.toUpperCase());



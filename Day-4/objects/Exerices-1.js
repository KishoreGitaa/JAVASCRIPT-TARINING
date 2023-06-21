// Create an empty object called dog
let dog = {
Name:"Rex",
Legs:4,
Color:"Brown",
Age:3,
Bark : function() {
    return "Woof Woof"
},
Breed:"Labrodor",
getDogInfo : function(){
    return `${dog.name} is a ${dog.color} ${dog.breed} with ${dog.legs} legs and is ${dog.age} years old.`;
}
};
// Print the dog object on the console
console.log(dog);

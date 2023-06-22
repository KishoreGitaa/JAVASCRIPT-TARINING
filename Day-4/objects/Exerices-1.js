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
    return `${dog.Name} is a ${dog.Color} ${dog.Breed} with ${dog.Legs} legs and is ${dog.Age} years old.`;
}
};
// Print the dog object on the console
console.log(dog);

// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// string.indexOf(substring)

let string ="kishore"
console.log(string.indexOf('is'));
console.log(string.indexOf('i'));
console.log(string.indexOf('s'));

// the substring if does not exist it returns -1
console.log(string.indexOf('E'));

function gradingStudents(grades) {
    let num =prompt("enter the value")
    if (num<40){
        console.log("yur are less than",num,"so fail")
    }else{
        console.log(grade)
    }
    
    function grade () {
        let div = num / 5 
        let ans = Math.floor(div)
        let add = ans + 1 
        let result = add * 5
        let value = result - num
        console.log(value)
        if (value < 3){
            console.log(value + num)
        }else (value == 3)
            console.log(num)
        } 
    }
  
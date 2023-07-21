function outerFunction() {
    let count = 0;
    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());


function outerFunc (){
    let count = 0;
    function plueFunc (){
        count++
        return count
    }
    function minFunc (){
        count--
        return count
    }
    return {
        plueFunc:plueFunc(),
        minFunc:minFunc()
    }
}
const innerFunct = outerFunc()
console.log(innerFunct.plueFunc);
console.log(innerFunct.minFunc);

// Callback
const callback = (n) => {
    return n ** 2
  }
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

// Returning function
// Higher order function returning an other function
const higherorder = n => {
    const doSomething = m => {
        const doWhatever = t =>{
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}
console.log(higherorder(2)(3)(10));

//  forEach method uses call back.
const sumarray = arr => {
    sum = 0;
    arr.forEach(callback);
    const callback = function(element) {
        sum +=element   
    }
    return sum
    
}
const number = [1,2,3,4,5]
console.log(sumarray(number));

// Setting time
// setInterval
function setTime(){
        let now = new Date ()
        console.log(now);
}
setInterval(setTime,1000)

// SetTimeout
function setname (){
    console.log("kishore");
}
setTimeout(setname,2000)
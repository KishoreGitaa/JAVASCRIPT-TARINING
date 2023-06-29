// YOUR CODE HERE //
function myFilterCondition(value) {
    if (value > 10) return true;
    else return false;
}
function yourFilter(arr,filterCondition){
    let filtervalue = []
    for(i=0;i<arr.length;i++){
        if(filterCondition(arr[i])){
            filtervalue.push(arr[i])
        }
    }
    return filtervalue
}


arr = [1, 2, 66, 10, 3, 7, 88, 99]
const newArr = yourFilter(arr, myFilterCondition);
console.log(newArr);

// END OF YOUR CODE //



// function myFilterCondition(value) {
//     if (value > 10) return true;
//     else return false;
// }

// arr = [1, 2, 66, 10, 3, 7, 88, 99]
// const newArr = yourFilter(arr, myFilterCondition);
// console.log(newArr);

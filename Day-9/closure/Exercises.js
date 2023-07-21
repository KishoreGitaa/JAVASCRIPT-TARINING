// Exercises: Level 1
// Create a closure which has one inner function

function oneinnerFunction() {
  let count = 0;
  function oneInner() {
    count++;
    return count;
  }
  return oneInner;
}
const oneFunc = oneinnerFunction();
console.log(oneFunc());

// Exercises: Level 2
// Create a closure which has three inner functions
function threeInnerFunction() {
  let a = 0;
  function plusone() {
    a++;
    return a;
  }
  function plustwo() {
    a++;
    return a;
  }
  function minthrid() {
    a--;
    return a;
  }
  return {
    plusone: plusone(),
    plustwo: plustwo(),
    minthrid: minthrid(),
  };
}
const resultInner = threeInnerFunction();
console.log(resultInner.plusone);
console.log(resultInner.plustwo);
console.log(resultInner.minthrid);

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

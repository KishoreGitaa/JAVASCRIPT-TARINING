// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    let total = 0;
    for (const income of personAccount.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of personAccount.expenses) {
      total += expense.amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Account Holder: ${personAccount.firstName} ${personAccount.lastName}\nTotal Income: ${personAccount.totalIncome()}\nTotal Expense: ${personAccount.totalExpense()}`;
  },
  addIncome: function (description, amount) {
    personAccount.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    personAccount.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return personAccount.totalIncome() - personAccount.totalExpense();
  },
};

personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance Work", 1000);
personAccount.addExpense("Rent", 1500);
personAccount.addExpense("Groceries", 500);

console.log(personAccount.accountInfo());
console.log("Account Balance:", personAccount.accountBalance());


let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    //account.expenses = account.expenses + amount;
}

// addIncome

let addIncome = function(income, account){
    account.income = account.income + income;
}

// resetAccount

let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
}

// getAccountSumamary

let getAccountSummary = function(account){
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}
// Account for Andrew has $900. $1000 in income. $100 in expenses.

// addIncome

addIncome(1000, myAccount);
// addExpense
addExpense(myAccount, 50);
// addExpense
addExpense(myAccount, 20);
// getAccountSummary
let summary = getAccountSummary(myAccount);
console.log(summary)
// resetAccount
resetAccount(myAccount);
// getAccountSummary
let summary2 = getAccountSummary(myAccount);
console.log(summary2);


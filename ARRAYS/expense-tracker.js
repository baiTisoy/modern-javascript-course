const account = {
    name: 'Andrew Mead',
    income: [],
    expenses: [],
    addIncome: function(description, amount){
        this.income.push( {description: description, amount:amount} )
    },
    addExpense: function(description, amount){
        this.expenses.push( {description: description, amount:amount} )
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount;
        })


        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount;
        })
        
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccount Summary -> total up all expenses -> Andrew Mead has $1250 in expense.

//1. add income array to account
//2. addIncome method -> description, amount
//3. Tweek getAccountSummary

// Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary())
const account={
    name: 'Sumit Kumar',
    expenes:[],
    income:[],
    addExpense: function(description,amount){
        this.expenes.push({
            description: description,
            amount: amount
        })
    },
    addIncome:function(description,amount){
        this.income.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary:function(){
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expenes.forEach(function(expense){
            totalExpenses=totalExpenses + expense.amount
        })
        this.income.forEach(function(income){
            totalIncome=totalIncome +income.amount
            accountBalance=totalIncome-totalExpenses
        })
        return `${this.name} has a balance of $${accountBalance}.$${totalIncome} in income.$${totalExpenses} in expenses.`
    }
}
account.addExpense('Rent',450)
account.addExpense('Coffee',85)
account.addIncome('job',2000)
console.log(account.getAccountSummary())
       
        
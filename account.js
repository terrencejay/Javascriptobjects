
function Account(accountNumber, owner, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
    this.transactionHistory = [];
}


Account.prototype.deposit = function(amount) {
    if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
    }
    
    this.balance += amount;
    this.transactionHistory.push({
        type: 'deposit',
        amount: amount,
        date: new Date(),
        balance: this.balance
    });
    
    return `Deposited $${amount}. New balance: $${this.balance}`;
};

Account.prototype.withdraw = function(amount) {
    if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive");
    }
    
    if (amount > this.balance) {
        throw new Error("Insufficient funds");
    }
    
    this.balance -= amount;
    this.transactionHistory.push({
        type: 'withdrawal',
        amount: amount,
        date: new Date(),
        balance: this.balance
    });
    
    return `Withdrawn $${amount}. New balance: $${this.balance}`;
};

// Task 3: Compound Interest Calculator
Account.prototype.calculateCompoundInterest = function(rate, years, compoundingFrequency = 12) {
    if (rate < 0 || years < 0) {
        throw new Error("Rate and years must be positive");
    }
    
    // Convert rate to decimal
    const r = rate / 100;
   
    
    const finalAmount = this.balance * Math.pow(1 + (r / compoundingFrequency), compoundingFrequency * years);
    const interestEarned = finalAmount - this.balance;
    
    return {
        principalBalance: this.balance,
        interestRate: rate,
        years: years,
        compoundingFrequency: compoundingFrequency,
        finalAmount: finalAmount,
        interestEarned: interestEarned
    };
};

// Example usage:
try {
    // Create a new account
    const myAccount = new Account("1234567890", "John Doe", 1000);
    
    // Test deposits and withdrawals
    console.log(myAccount.deposit(500));  // Deposited $500. New balance: $1500
    console.log(myAccount.withdraw(200)); // Withdrawn $200. New balance: $1300
    
    // Calculate compound interest (5% annual rate for 3 years)
    const interestCalculation = myAccount.calculateCompoundInterest(5, 3);
    console.log("\nCompound Interest Calculation:");
    console.log(`Principal Balance: $${interestCalculation.principalBalance.toFixed(2)}`);
    console.log(`Interest Rate: ${interestCalculation.interestRate}%`);
    console.log(`Time Period: ${interestCalculation.years} years`);
    console.log(`Final Amount: $${interestCalculation.finalAmount.toFixed(2)}`);
    console.log(`Interest Earned: $${interestCalculation.interestEarned.toFixed(2)}`);
    
    // View transaction history
    console.log("\nTransaction History:");
    console.log(myAccount.transactionHistory);
    
} catch (error) {
    console.error("Error:", error.message);
}

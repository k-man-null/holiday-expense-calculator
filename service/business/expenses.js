/**
 * Calculates the payouts based on an array of expense objects.
 * @param {Array} expenses - An array of expense objects.
 * Each expense object should have the following properties:
 *   - amount (Number): The amount of the expense.
 *   - name (String): The category or type of the expense.
 * @returns { total: number, equalShare: number, payouts { Array }} - The payouts result as an object.
 */

function calculateExpenseSplit(expenses) {
    // Calculate the total expense
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

    // Create a map to keep track of name-wise balances
    const balances = new Map();

    // Calculate the balances for each person
    expenses.forEach((expense) => {
        const { name, amount } = expense;
        balances.set(name, (balances.get(name) || 0) + amount);
    });

    // Calculate the equal share per person
    const equalShare = totalExpense / balances.size;

    // Create an array to store the payouts
    const payouts = [];

    balances.forEach((balance, name) => {
        if (balance < equalShare) {
            balances.forEach((otherBalance, otherName) => {
                if (otherBalance > equalShare) {
                    const payoutAmount = Math.min(equalShare - balance, otherBalance - equalShare);
                    payouts.push({
                        owes: name,
                        owed: otherName,
                        amount: payoutAmount,
                    });
                    balance += payoutAmount;
                    balances.set(otherName, otherBalance - payoutAmount);
                    if (balance === equalShare) {
                        return;
                    }
                }
            });
        }
    });

    // Return the results
    return {
        total: totalExpense,
        equalShare,
        payouts,
    };
}

module.exports = { calculateExpenseSplit };
const { calculateExpenseSplit } = require('../business/expenses');

async function settleExpenses(req, res) {

    try {

        const expenses = req.body.expenses;

        if (expenses !== undefined) {

            const payout = calculateExpenseSplit(expenses);
            return res.status(200).json(payout);

        } 


    } catch (error) {

        console.log(error)

    }

}

module.exports = {
    settleExpenses
}
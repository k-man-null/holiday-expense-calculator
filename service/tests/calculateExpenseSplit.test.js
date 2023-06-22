const { calculateExpenseSplit } = require('../business/expenses');

describe('calculateExpenseSplit', () => {
    it('should correctly calculate expense split for more than two people', () => {
        const expenses = [
            { name: "Adriana", amount: 5.75 },
            { name: "Adriana", amount: 5.75 },
            { name: "Bao", amount: 12 },
            { name: "Cynthia", amount: 7.5 },
            { name: "Bill", amount: 20 }
        ];

        const expectedOutput = {
            total: 51,
            equalShare: 12.75,
            payouts: [
                { owes: 'Adriana', owed: 'Bill', amount: 1.25 },
                { owes: 'Bao', owed: 'Bill', amount: 0.75 },
                { owes: 'Cynthia', owed: 'Bill', amount: 5.25 }
            ]
        };

        const result = calculateExpenseSplit(expenses);
        expect(result).toEqual(expectedOutput);
    });

    it('should correctly calculate expense split for ten expenses', () => {
        const expenses = [
            { name: 'Adriana', amount: 5.75 },
            { name: 'Adriana', amount: 5.75 },
            { name: 'Bao', amount: 12 },
            { name: 'Cynthia', amount: 7.5 },
            { name: 'David', amount: 8.25 },
            { name: 'Adriana', amount: 6 },
            { name: 'Cynthia', amount: 9 },
            { name: 'Bao', amount: 10.5 },
            { name: 'David', amount: 7 },
            { name: 'Bao', amount: 5 },
        ];

        const expectedOutput = {
            total: 76.75,
            equalShare: 19.1875,
            payouts: [
                { owes: 'Adriana', owed: 'Bao', amount: 1.6875 },
                { owes: 'Cynthia', owed: 'Bao', amount: 2.6875 },
                { owes: 'David', owed: 'Bao', amount: 3.9375 }
            ]
        };


        const result = calculateExpenseSplit(expenses);
        expect(result).toEqual(expectedOutput);
    });
});

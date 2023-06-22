const express = require('express');
const router = express.Router();

const {
    settleExpenses
} = require('../controllers/expensesController');

router.post('/', settleExpenses);

module.exports = router;
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const expensesRouter = require('./routes/expenses');

const app = express();

app.use(express.json())

var corsOptions = {
    origin: ["http://localhost:4200"],
    credentials: true
}

app.use(cors(corsOptions))

app.use(logger('combined'));

app.use('/payouts', expensesRouter);

module.exports = app;
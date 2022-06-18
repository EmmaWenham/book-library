const express = require('express');
const app = express();
const readersRouter = require('./routes/reader');

app.use(express.json());

app.use('/readers', readersRouter);


module.exports = app;
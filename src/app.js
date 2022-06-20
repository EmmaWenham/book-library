const express = require("express");
const readersRouter = require("./routes/reader");
const bookRouter = require("./routes/books");

const app = express();

app.use(express.json());

app.use("/readers", readersRouter);

app.use("/books", bookRouter);

module.exports = app;

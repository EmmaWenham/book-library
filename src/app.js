const express = require("express");
const readerRouter = require("./routes/reader");
const bookRouter = require("./routes/books");
const genresRouter = require("./routes/genre");
const app = express();

app.use(express.json());

app.use("/readers", readerRouter);
app.use("/books", bookRouter);
app.use("/genres", genresRouter);

module.exports = app;
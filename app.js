//external requires
const {environment} = require('./config')
const cors = require('cors')
const express = require("express");
const morgan = require("morgan");
const { ValidationError } = require("sequelize");
const bearerToken = require('express-bearer-token');
const path = require("path");


// internal requires

const indexRouter = require("./routes/index");
// const homeRouter = require("./routes/api/homes");
// const usersRouter = require("./routes/api/users");

const app = express();
app.use(cors({origin: true}))

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/homes", homeRouter);
// app.use('/api/tasks', displayTasks);

// unhandled requests
app.use((req, res, next) => {
  const error = new Error("Resource could not be found.");
  error.errors = ["Resource could not be found."];
  error.status = 404;
  res.render("404page");  //create 404 add button to go to home
});

//sequelize errors
app.use((error, req, res, next) => {
  if (error instanceof ValidationError) {
    error.errors = error.errors.map((err) => err.message);
    error.title = "Sequelize Error";
  };
  next(error);
});

//general error handler
app.use((error, req, res, next) => {
  console.log(error)
  res.status(error.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: error.title || "Server Error",
    errors: error.errors,
    stack: isProduction ? null : error.stack
  });
});

module.exports = app;
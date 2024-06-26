var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const mongoose = require("mongoose");
// The below URL is for MongoDB Atlas
// const dbUrl = "mongodb+srv://user1:user1@cluster0.qoiapvl.mongodb.net/inventory?retryWrites=true&w=majority&appName=Cluster0"

// The below URL is for Local MongoDB
// const dbUrl = "mongodb://localhost:27017/inventory";

// The below URL is for mongoDB pointing to the docker container
const dbUrl = "mongodb://mymongodbcontainer:27017/inventory"; 

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 60000, // Increased to 60 seconds
})
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log('Connection failed', err));


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};
  res.locals.error = {}

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: 'Error' });
});

module.exports = app;
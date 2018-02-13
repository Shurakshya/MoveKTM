const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require("morgan");
const bodyParser = require("body-parser");
const routes = require('./api/routes'); // api routes to be built
const app = express();
const cors = require('cors')
const http = require('http');
const passport = require('passport');
const server = http.createServer(app);

require('./api/models/db');
require('./api/auth/passport');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'client','public/index.html')));
// app.use(passport.initialize());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, id_token"
  );
  next();
});

app.use('/api',routes);

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'client','public','index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
});

server.listen(3001||process.env.PORT,()=>{
  console.log("Express app running on port 3001");
});

module.exports = app;

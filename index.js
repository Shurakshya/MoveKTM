const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require("body-parser");
const routes = require('./api/routes'); // api routes to be built
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',routes); //to be built

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'client','public','index.html'))
});

app.use((req, res, next)=>{
  console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
  next();
});


app.listen(3001||process.env.PORT,()=>{
  console.log("Express app running on port 3001");
});

module.exports = app;
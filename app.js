
var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog'); //Import routes for "catalog" area of site

var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://sd081104:ghsekrhfh56@review.pivuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));


app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter); // Add catalog routes to middleware chain.

module.exports = app;

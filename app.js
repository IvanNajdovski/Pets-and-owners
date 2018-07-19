// npm packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

// app imports
const { petRouter } = require("./routes"); // ES6 object destructuring from the obj

// globals
const app = express();

app.set('view engine', 'pug');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use('/pets', petRouter);
app.use(morgan('tiny'));

app.get('/', (req, res, next) => {
	return res.redirect('/pets');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	return next(err);
});

/* 
  error handler - for a handler with four parameters, 
  the first is assumed to be an error passed by another
  handler's "next"
 */
 app.use((err, req, res, next) => {
 	res.status(err.status || 500);
 	return res.render('error', {
 		message: err.message,
    /*
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    */
        error: app.get('env') === 'development' ? err : {}
 	});
 });

 app.listen(3000, () => {
 	console.log('The forse is strong on port 3000');
 });
const mongoose = require('mongoose');
const Pet = require('./pet');
/*
 Database config, this can be placed in another file if you want
 just make sure it runs when your server starts
*/
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose
.connect('mongodb://localhost:27017/pets-app', 
	{ useNewUrlParser: true }
)
.then(() => {
	// once connected, give a success message
	console.log('Connected!');
})
.catch(e => {
	 // if something goes wrong let us know
	console.log(e);
});

// exporting models from other files in our module.exports object
exports.Pet = require('./pet');
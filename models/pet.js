const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
	name: String
	 // let's create a reference to the owner model
	 owner: {
	 	// the type is going to be just an id
	 	type: mongoose.Schema.Types.ObjectId
	 	// but it will refer to the Owner model
        // (the first parameter to the mongoose.model method)
        ref: "Owner"
	 }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
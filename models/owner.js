const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
	name: String,
     // every owner should have an array called pets
    pets: [{
     // which consists of a bunch of ids
     // (we will use mongoose to populate the entire pet object, 
     // let's just store the _id for now)
    	type: mongoose.Schema.Types.ObjectId,
      // make sure that we reference the Pet model
      // ('Pet' is defined as the first parameter to the mongoose.model method)
    	ref: 'Pet'
    }]
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
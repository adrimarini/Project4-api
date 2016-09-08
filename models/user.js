var mongoose = require( 'mongoose' );

//Create a schema

var UserSchema = new mongoose.Schema( {
  firstname: String,
  lastname: String,
  host: Boolean,
  phone: String,
  email: String,
  image: String
});

// add bcrypt hashing to model (works on a password field)!
UserSchema.plugin(require('mongoose-bcrypt'));
// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
UserSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User= mongoose.model('User', UserSchema);

module.exports = User;

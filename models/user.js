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

var User= mongoose.model('User', UserSchema);

module.exports = User;

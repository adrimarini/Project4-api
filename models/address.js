var mongoose = require( 'mongoose' );

//Create a schema

var AddressSchema = new mongoose.Schema( {
  country: String,
  city: String,
  town: String,
  street: String,
  unit_num: Number,
  house_num: Number

});

var Address= mongoose.model('Address', AddressSchema);

module.exports =Address;

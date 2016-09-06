var mongoose = require( 'mongoose' );


//Create a schema

var AddressSchema = new mongoose.Schema( {
  // host: {
  //   type : mongoose.Schema.Types.ObjectId,
  //   ref : 'User'
  // },
  country: String,
  state: String,
  city: String,
  town: String,
  street: String,
  unit_num: Number,
  house_num: Number,
  images: String

});

var Address= mongoose.model('Address', AddressSchema);

module.exports =Address;

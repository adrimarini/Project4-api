var mongoose = require( 'mongoose' );


//Create a schema

var AddressSchema = new mongoose.Schema( {
  // host: {
  //   type : mongoose.Schema.Types.ObjectId,
  //   ref : 'User'
  // },
  country: {type: String, required: true},
  state: String,
  city: {type: String, required: true},
  town: String,
  street: {type: String, required: true},
  unit_num: Number,
  house_num: Number,
  images: String,
  lat: String,
  lng: String

});

var Address= mongoose.model('Address', AddressSchema);

module.exports =Address;

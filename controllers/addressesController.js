var Address = require('../models/address');

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};

function index(req, res, next) {
  console.log('I hear you!');

  Address.find({}, function(err, addresses) {
    if(err) next(err);
    res.json(addresses);
  });
}

function create(req, res, next) {
  console.log('This is a new address!');

  var newAddress =  new Address(req.body);
  var formattedAddress = newAddress.country + newAddress.street + ", " + newAddress.city
  var request = require('request');
  var getLatLng = request('https://maps.googleapis.com/maps/api/geocode/json?address=' + formattedAddress, function (error, response, body){
    if(!error && response.statusCode == 200) {
      console.log("GOOGLE API RESPONSE")
      console.log(body)
      var bodyP = JSON.parse(body)
      var lat = bodyP.results[0].geometry.location.lat
      var lng = bodyP.results[0].geometry.location.lng
      console.log(lat)
      console.log(lng)
      newAddress.lat = lat
      newAddress.lng = lng

      newAddress.save(function(err, savedAddress) {
        if (err) next(err);

        res.json(savedAddress);
      });
    }
    // var latLngAddress = request('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + "," + lng + '&key=AIzaSyDL5Jzcocc4n65eI3mMcLbFsqtTqEs2c88')
    // console.log("LATLNG ADDRESS BELOW")
    // console.log(latLngAddress)

  })





}

function show(req, res, next) {
  console.log('This is a single Address');

  Address.find({_id: req.params.id}, function(err, address) {
    if (err || !address) next(err);

    res.json(address);
  });
}

function update(req, res, next) {
  console.log('Updating address');

  Address.findOne({_id: req.params.id}, function(err, address) {
    if (err || !address) next(err);

    if(req.body.country) address.country = req.body.country;
    if(req.body.state) address.state = req.body.state;
    if(req.body.city) address.city = req.body.city;
    if(req.body.town) address.town = req.body.town;
    if(req.body.street) address.street = req.body.street;
    if(req.body.unit_num) address.unit_num = req.body.unit_num;
    if(req.body.house_num) address.house_num = req.body.house_num;
    if(req.body.images) address.images = req.body.images;

    res.json(address);
  });
}

function destroy(req, res, next) {
  var id = req.params.id;

  Address.remove({_id: id}, function(err) {
    if (err) next(err);
    res.json({msg: "Address deleted"});
  })
}

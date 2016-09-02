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
  newAddress.save(function(err, savedAddress) {
    if (err) next(err);

    res.json(savedAddress);
  });
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
    if(req.body.city) address.city = req.body.city;
    if(req.body.town) address.town = req.body.town;
    if(req.body.street) address.street = req.body.street;
    if(req.body.unit_num) address.unit_num = req.body.unit_num;
    if(req.body.house_num) address.house_num = req.body.house_num;

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

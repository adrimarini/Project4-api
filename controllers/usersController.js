var User = require('../models/user');

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};

function index(req, res, next) {
  console.log('I hear you!');

  User.find({}, function(err, users) {
    if(err) next(err);
    console.log(users);
    res.json(users);
  });
}

function create(req, res, next) {
  console.log('This is a new user!');

  var newUser =  new User(req.body);
  newUser.save(function(err, savedUser) {
    if (err) next(err);

    res.json(savedUser);
  });
}

function show(req, res, next) {
  console.log('This is a single User');

  User.find({_id: req.params.id}, function(err, user) {
    if (err || !user) next(err);

    res.json(user);
  });
}

function update(req, res, next) {
  console.log('Updating user');

  User.findOne({_id: req.params.id}, function(err, user) {
    if (err || !user) next(err);

    if(req.body.firstname) user.firstname = req.body.firstname;
    if(req.body.lastname) user.lastname = req.body.lastname;
    if(req.body.host) user.host = req.body.host;
    if(req.body.phone) user.phone = req.body.phone;
    if(req.body.email) user.email = req.body.email;
    if(req.body.image) user.image = req.body.image;

    res.json(user);
  });
}

function destroy(req, res, next) {
  var id = req.params.id;

  User.remove({_id: id}, function(err) {
    if (err) next(err);
    res.json({msg: "User deleted"});
  })
}

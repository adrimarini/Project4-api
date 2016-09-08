var mongoose = require('mongoose');
require('dotenv').load({silent:true});

var Address = require('../models/address');
var User = require('../models/user');

var database = require('./database');

// var addresses = [
//   {
//     country: "United States",
//     state: "California",
//     city: "San Francisco",
//     town: "Danville",
//     street: "Wayfare Way",
//     house_num: "17"
//   },
//   {
//     country: "United States",
//     state: "California",
//     city: "Santa Monica",
//     street: "302 Arizona Ave",
//     unit_num: "1"
//   },
//   {
//     country: "United States",
//     state: "California",
//     city: "Santa Monica",
//     street: "220 Broadway"
//   }
// ]
//
// var users = [
//   {
//     firstname: "Adrianna",
//     lastname: "marini",
//     host: true,
//     phone: "925 354 5307",
//     email: "a@adri.com",
//     image: "http://placekitten.com/g/200/300"
//   },
//   {
//     firstname: "Samantha",
//     lastname: "marini",
//     host: false,
//     phone: "925 354 5313",
//     email: "sam@samantha.com",
//     image: "http://placekitten.com/g/200/300"
//   }
// ]
//
// Address.remove({}, function(err) {
//  if (err) console.log(err);
//  Address.create(addresses, function(err, addresses) {
//   if (err) {
//   console.log(err);
//   } else {
//   console.log("Database seeded with " + addresses.length + " addresses.");
//   mongoose.connection.close();
//   }
//   process.exit();
//  });
// });
//
// User.remove({}, function(err) {
//  if (err) console.log(err);
//  User.create(users, function(err, users) {
//   if (err) {
//   console.log(err);
//   } else {
//   console.log("Database seeded with " + users.length + " users.");
//   mongoose.connection.close();
//   }
//   process.exit();
//  });
// });

User.remove({}, function(err) {
  if(err) console.log(err);
  Address.remove({}, function(err) {

    if(err) console.log(err);
    mongoose.connection.close();
  })
  process.exit();
})

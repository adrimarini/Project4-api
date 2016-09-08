var express = require('express');
var router = express.Router();

var addressesController = require('../controllers/addressesController');

// Require token authentication.
var token = require('../config/token_auth');

router.route('/')
  .get(addressesController.index)
  .post(token.authenticate, addressesController.create)

router.route('/:id')
  .get(addressesController.show)
  .patch(addressesController.update)
  .delete(addressesController.destroy)

module.exports = router;

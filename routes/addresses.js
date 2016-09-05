var express = require('express');
var router = express.Router();

var addressesController = require('../controllers/addressesController');

router.route('/')
  .get(addressesController.index)
  .post(addressesController.create)

router.route('/:id')
  .get(addressesController.show)
  .patch(addressesController.update)
  .delete(addressesController.destroy)

module.exports = router;

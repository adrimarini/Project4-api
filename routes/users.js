var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController');

router.route('/')
  .get(usersController.index)
  .post(usersController.create)

router.route('/:id')
  .get(usersController.show)
  .patch(usersController.update)
  .delete(usersController.destroy)

module.exports = router;

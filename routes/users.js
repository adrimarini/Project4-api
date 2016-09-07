var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController');
// Require token authentication.
var token = require('../config/token_auth');

router.route('/')
  .get(usersController.index)
  .post(usersController.create)

router.route('/:id')
  .get(token.authenticate, usersController.show)
  .patch(token.authenticate, usersController.update)
  .delete(token.authenticate, usersController.destroy)

router.post('/token', token.create);

module.exports = router;

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var usersController = require('../controllers/usersController');

router.route('/api')
  .get(usersController.index)
  .post(usersController.create)

router.route('/api/:id')
  .get(usersController.show)
  .patch(usersController.update)
  .delete(usersController.destroy)

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var addressesController = require('../controllers/addressesController');

router.route('/api')
  .get(addressesController.index)
  .post(addressesController.create)

router.route('/api/:id')
  .get(addressesController.show)
  .patch(addressesController.update)
  .delete(addressesController.destroy)








module.exports = router;

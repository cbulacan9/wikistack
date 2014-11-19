var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('add_page');
});

router.post('/submit/', function(req, res) {
});

module.exports = router;

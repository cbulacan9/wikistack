var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var models = require('../models')

/* GET home page. */
router.get('/:url', function(req, res) {
  var url = req.params.url;

	models.Page.findOne ({ url_name: url })
	.exec(function(err, page) {
  		res.render('show_page', page );
  	});

});

router.post('/submit', function(req, res) {
	res.redirect('/edit');
});

router.get('/:url/delete', function(req, res) {
	var url = req.params.url;
	console.log(url);
	models.Page.findOneAndRemove({url_name: url},function(err, page) {
		res.redirect('/');
		console.log("Success!")
	});
});

module.exports = router;

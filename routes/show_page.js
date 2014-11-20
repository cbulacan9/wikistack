var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var models = require('../models')

/* GET home page. */
router.get('/:url/:id', function(req, res) {
  var url = req.params.url;
  var id = req.params.id;
	models.Page.findOne ({ _id: id })
	.exec(function(err, page) {
  			res.render('show_page', page );
  	});
});

router.post('/submit', function(req, res) {
	res.redirect('/edit');
});

router.get('/:url/:id/delete', function(req, res) {
	var url = req.params.url;
	var id = req.params.id;
	console.log(url);
	models.Page.findOneAndRemove({_id: id},function(err, page) {
		res.redirect('/');
		console.log("Success!")
	});
});

module.exports = router;

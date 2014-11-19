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

module.exports = router;

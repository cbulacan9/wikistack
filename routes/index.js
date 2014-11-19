var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res) {

	models.Page.find(function(err, pages) {
		var docs = pages;
  		res.render('index', { title: 'BROWSE MY WIKISTACK', docs: docs });
  	});

});

module.exports = router;

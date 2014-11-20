var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var models = require('../models')

/* GET home page. */

router.get('/:url', function(req, res) {
  var url = req.params.url;
  var id = req.params.id;
	models.Page.find ({ url_name: url })
	.exec(function(err, page) {
		if(page.length == 1) {
			res.render('show_page', page[0])
		}
		else {
			var docs = page;
			res.render('dis', {title: page[0].title + " (disambiguation)", docs: docs});
		}
  	});
});

module.exports = router;
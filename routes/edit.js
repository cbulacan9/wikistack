var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('../models');
/* GET users listing. */
router.get('/:url', function(req, res) { 
	var url = req.params.url;
	models.Page.findOne ({ url_name: url })
	.exec(function(err, page) {
		var docs = page;
	// var pageTitle = page.title;
	// var pageContent = page.body;
	res.render('edit_page', {title: 'EDIT A PAGE', page: docs});
  	});
});

router.post('/:url/submit', function(req, res) {
	var title = req.body.title;
	var body = req.body.content;
	var url = req.params.url;

	models.Page.findOneAndUpdate({url_name: url},{title:title, body:body},function(err, page) {
		res.redirect('/');
	});
})

router.post('/:url/delete', function(req, res) {
	var url = req.params.url;

	models.Page.findOneAndRemove({url_name: url},function(err, page) {
		res.redirect('/');
		console.log("Success!")
	});
})

module.exports = router;
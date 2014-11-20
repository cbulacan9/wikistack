var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('../models');
/* GET users listing. */

router.get('/:url/:id', function(req, res) { 
	var url = req.params.url;
	var id = req.params.id;
	models.Page.findOne ({ _id: id })
	.exec(function(err, page) {
		var docs = page;
	// var pageTitle = page.title;
	// var pageContent = page.body;
	res.render('edit_page', {title: 'EDIT A PAGE', page: docs});
  	});
});

router.post('/:url/:id/submit', function(req, res) {
	var title = req.body.title;
	var body = req.body.content;
	var url = req.params.url;
	var id = req.params.id;
	
	models.Page.findOneAndUpdate({_id: id},{title:title, body:body},function(err, page) {
		res.redirect('/');
	});
})

router.post('/:url/:id/delete', function(req, res) {
	var url = req.params.url;
	var id = req.params.id;

	models.Page.findOneAndRemove({_id: id},function(err, page) {
		res.redirect('/');
		console.log("Success!")
	});
})

module.exports = router;
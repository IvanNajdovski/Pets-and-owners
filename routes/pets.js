const express = require('express');
const { Pet } = require('../models');
const mongoose = require('mongoose');

const router = express.Router();

// all pets at /pets
router
.route('') // this is equivalent to /pets
.get((req, res, next) => {
	return Pet.find().then(pets => {
		return res.render('index', { pets });
	});
})
.post((req, res, next) => {
	return Pet.create(req.body).then(pets => {
		return res.redirect('/');
	});
});

// create a new pet form
router.route('/new').get((req, res, next) => {
	return res.render('new');
});

// pets by ID routes /pets/:id
router
.route('/:id')
.get((req, res, next) => {
	return Pet.findById(req.params.id).then(pet => {
		return res.render('show', { pet });
	});
})
.patch((req, res, next) => {
	return Pet.findByIdAndUpdate(req.params.id, req.body).then(pet => {
		return res.redirect('/');
	});
})
.delete((req, res, next) => {
	return Pet.findByIdAndRemove(req.params.id).then(pet => {
		return res.redirect('/');
	});
})
// edit or delete a pet form /pets/:id/edit
router.route('/:id/edit').get((req, res, next) => {
	return Pet.findById(req.params.id).then(pet => {
		return res.render('edit', { pet });
	});
});

module.exports = router;
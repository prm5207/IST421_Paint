var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Roller = require('../models/roller.js');

/* GET ALL ROLLERS */
router.get('/', function(req, res, next) {
    Roller.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE ROLLER BY ID */
router.get('/:id', function(req, res, next) {
    Roller.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE ROLLER */
router.post('/', function(req, res, next) {
    Roller.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE ROLLER */
router.put('/:id', function(req, res, next) {
    Roller.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE ROLLER */
router.delete('/:id', function(req, res, next) {
    Roller.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Paint = require('../models/paint.js');

/* GET ALL PAINTS */
router.get('/', function(req, res, next) {
    Paint.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE PAINT BY ID */
router.get('/:id', function(req, res, next) {
    Paint.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE PAINT */
router.post('/', function(req, res, next) {
    Paint.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE PAINT */
router.put('/:id', function(req, res, next) {
    Paint.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE PAINT */
router.delete('/:id', function(req, res, next) {
    Paint.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
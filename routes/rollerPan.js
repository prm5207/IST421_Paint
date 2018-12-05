var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var RollerPan = require('../models/rollerPan.js');

/* GET ALL ROLLERPANS */
router.get('/', function(req, res, next) {
    RollerPan.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});
//OST -H "Content-Type: application/json" -d

/* GET SINGLE ROLLERPANS BY ID */
router.get('/:id', function(req, res, next) {
    RollerPan.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        if (!post) {
            return res.status(404).json({
                status: "error",
                message: "No roller pan with that ID"
            })
        }
        res.json(post);
    });
});

/* SAVE ROLLERPANS */
router.post('/', function(req, res, next) {
    RollerPan.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE ROLLERPANS */
router.put('/:id', function(req, res, next) {
    RollerPan.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
         if (!post) {
                    return res.status(404).json({
                        status: "error",
                        message: "No roller pan with that ID"
                    })
          }
        res.json(post);
    });
});

/* DELETE ROLLERPANS */
router.delete('/:id', function(req, res, next) {
    RollerPan.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;

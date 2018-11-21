var mongoose = require('mongoose');

var PaintSchema = new mongoose.Schema({
    itemNumber: Number,
    color: String,
    quantity: Number,
    price: Number,
});

module.exports = mongoose.model('Paint', PaintSchema);
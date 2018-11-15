var mongoose = require('mongoose');

var PaintSchema = new mongoose.Schema({
    PartNumber: String,
    Color: String,
    Quantity: Number,
    Price: Number,
});

module.exports = mongoose.model('Paint', PaintSchema);
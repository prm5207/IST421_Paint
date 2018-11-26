var mongoose = require('mongoose');

var RollerSchema = new mongoose.Schema({
    PartNumber: String,
    Brand: String,
    Material: String,
    Size: String,
    Quantity: Number,
    Price: Number,
});

module.exports = mongoose.model('Roller', RollerSchema);
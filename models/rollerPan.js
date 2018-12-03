var mongoose = require('mongoose');

var rollerPanSchema = new mongoose.Schema({
    PartNumber: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    Size: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Material: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('RollerPan', rollerPanSchema);

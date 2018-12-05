var mongoose = require('mongoose');

var rollerPanSchema = new mongoose.Schema({
      PartNumber: String,
      Material: String,
      Size: String,
      Quantity: Number,
      Price: Number,
    });

module.exports = mongoose.model('RollerPan', rollerPanSchema);

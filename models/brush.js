var mongoose = require('mongoose');

var BrushSchema = new mongoose.Schema({
  PartNumber: String,
  Brand: String,
  Material: String,
  Size: String,
  Quantity: Number,
  Price: Number,
});

module.exports = mongoose.model('Brush', BrushSchema);

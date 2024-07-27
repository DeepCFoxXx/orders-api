const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  submittingUser: {
    type: String,
    required: true,
  },
  submittedDate: {
    type: Date,
    default: Date.now,
  },
},{ versionKey: false });

module.exports = mongoose.model('Order', orderSchema);

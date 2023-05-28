const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema =  new Schema({
  adress: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  totalPrice: {
    type: String,
    required: true
  },
  cartItems: {
    type: Array    
  },
})

module.exports = mongoose.model('Order', orderSchema)
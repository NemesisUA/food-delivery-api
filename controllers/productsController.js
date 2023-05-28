const Products = require('../models/productModel');
const Orders = require('../models/orderModel');
const mongoose = require('mongoose');

// get all products
const getProducts = async (req, res) => {
  const products = await Products.find({});
  
  res.status(200).json(products);
}

// get shop products
const getShopProducts = async (req, res) => {
  const { shop } = req.params;

  if ( !["KFC", "McDonny", "BurgerKing"].includes(shop) ) {
    return res.status(404).json({error: 'No such shop'})
  }

  const shopProducts = await Products.find({shop: shop})

  if (!shopProducts) {
    return res.status(404).json({error: 'No such shop products'})
  }
  console.log('products KFC:', shopProducts )
  res.status(200).json(shopProducts)
}

const postOrder = async (req, res) => {
  const {adress, email, phone, userName, totalPrice, cartItems} = req.body

  // add order to the database
  try {
    const order = await Orders.create({ adress, email, phone, userName, totalPrice, cartItems })
    res.status(200).json(order)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getProducts,
  getShopProducts,
  postOrder,
}

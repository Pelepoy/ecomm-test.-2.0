import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

// @desc    Fetch all products
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
});

// @desc    Fetch single product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
});

export { getProduct, getProductById };
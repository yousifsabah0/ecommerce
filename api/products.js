const handler = require("express-async-handler");
const Product = require("../models/Product");
const status = require("http-status");

/**
 * @function findAll
 * Returns all products from database
 *
 */
const findAll = handler(async (req, res, next) => {
  const products = await Product.find(req.query);
  const count = await Product.countDocuments();

  return res.status(200).json({
    status: "success",
    data: {
      count,
      products,
    },
  });
});

/**
 * @function findProduct
 * Returns specific product.
 *
 */
const findProduct = handler(async (req, res, next) => {
  const product = await Product.findOne(req.params.id);

  if (!product) {
    return res.status(status.NOT_FOUND).json({
      message: "Product not found.",
    });
  }

  return res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

module.exports = {
  findAll,
  findProduct,
};

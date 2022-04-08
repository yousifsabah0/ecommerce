const handler = require("express-async-handler");
const Category = require("../models/Category");
const status = require("http-status");

/**
 * @function listCategories
 * Returns a list of all categories from database
 *
 */
const listCategories = handler(async (req, res, next) => {
  const categories = await Category.find(req.query);
  const count = await Product.countDocuments();

  return res.status(200).json({
    status: "success",
    data: {
      count,
      categories,
    },
  });
});

module.exports = {
  listCategories,
};

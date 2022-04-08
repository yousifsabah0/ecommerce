const handler = require("express-async-handler");
const Category = require("../models/Category");
const Product = require("../models/Product");
const User = require("../models/User");
const status = require("http-status");

/**
 * @function login
 * Admin login
 *
 */
const login = handler(async (req, res, next) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email });

  if (!admin) {
    return res.status(status.NOT_FOUND).json({
      message: "There's no such email.",
    });
  }

  if (!admin.siteAdmin) {
    return res.status(status.UNAUTHORIZED).json({
      message: "Unable to access this route.",
    });
  }

  if (admin.password !== password) {
    return res.status(status.UNAUTHORIZED).json({
      message: "Invalid password",
    });
  }

  return res.status(200).json({
    status: "success",
    data: {
      message: "Welcome back.",
    },
  });
});

/**
 * @function newProduct
 * Creates a new product
 *
 */
const newProduct = handler(async (req, res, next) => {
  let product;

  req.file
    ? (req.body.image = req.file.filename)
    : new Error("You need to select a file to upload.");
  product = await Product.create(req.body);

  if (!product) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Unable to create a new product.",
    });
  }

  return res.status(200).json({
    status: "success",
    data: {
      message: "New product created successfully.",
      product_id: product.id,
      session_id: "current_logged_in_admin_id",
    },
  });
});

/**
 * @function newCategory
 * Creates a new category
 *
 */
const newCategory = handler(async (req, res, next) => {
  await Category.create({ name: req.body.name });

  return res.status(200).json({
    status: "success",
    data: {
      message: "New category added.",
    },
  });
});

/**
 * @function updateCategory
 * Updates an category name
 *
 */
const updateCategory = handler(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(status.NOT_FOUND).json({
      message: "There's no category with this id.",
    });
  }

  category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  return res.status(200).json({
    status: "success",
    data: {
      message: "Category updated",
    },
  });
});

/**
 * @function deleteCategory
 * Deletes an category
 *
 */
const deleteCategory = handler(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(status.NOT_FOUND).json({
      message: "There's no category with this id.",
    });
  }

  await category.remove();

  return res.status(200).json({
    status: "success",
    data: {
      message: "Category removed",
    },
  });
});

module.exports = {
  login,
  newProduct,
  newCategory,
  updateCategory,
  deleteCategory,
};

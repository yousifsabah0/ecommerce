const { Schema, Types, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 120,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    inStock: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = model("Product", ProductSchema);

module.exports = Product;

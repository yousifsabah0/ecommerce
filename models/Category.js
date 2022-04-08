const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      trim: true,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = model("Category", CategorySchema);

module.exports = Category;

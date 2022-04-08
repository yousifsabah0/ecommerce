const { Schema, Types, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      trim: true,
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      select: false,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    avatar: String,
    siteAdmin: {
      type: Boolean,
      default: false,
    },
    cart: [
      {
        type: Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;

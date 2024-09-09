const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhotoSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "",
  },
});

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  photos: [PhotoSchema],
});

const CartSchema = new Schema({
  items: [CartItemSchema],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
});

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = { CartModel, CartSchema };

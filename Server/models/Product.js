const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema for individual photos
const PhotoSchema = new Schema({
  url: {
    type: String,
    required: [true, "Photo URL is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity cannot be negative"],
  },
});

// Schema for colors with associated photos
const ColorSchema = new Schema({
  color: {
    type: String,
    required: [true, "Color is required"],
  },
  photos: [PhotoSchema], // Array of photos for each color
});

// Main Product schema
const ProductSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, // ObjectId for user references
      required: true,
      ref: "User", // Reference to User model
    },
    productname: {
      type: String,
      required: [true, "Product name is required"],
    },
    brand: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    colors: [ColorSchema], // Updated to handle multiple colors with their own photos and quantities
    sizes: {
      type: [String],
      required: [true, "Sizes are required"],
    },
    shipping: {
      type: String,
      required: [true, "Shipping information is required"],
    },
    returnType: {
      type: String,
      required: [true, "Return type is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    fit: {
      type: String,
      required: [true, "Fit is required"],
    },
    model: {
      type: String,
      required: [true, "Model is required"],
    },
    sustainability: {
      type: [String],
    },
    photo: {
      type: String,
      required: [true, "Main product photo is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true, // Unique constraint for the product slug
    },
    category: {
      type: [String], // Array of strings for multiple categories
      required: [true, "Category is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
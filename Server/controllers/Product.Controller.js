const Product = require("../models/Product");
const errorHandler = require("../utils/Error");

// Helper function to generate slug
const generateSlug = (productname, brand, colors) => {
  const baseSlug = (productname + (brand || '')).split(" ").join("-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "");
  const colorSlug = colors.length > 0 ? colors[0].color.toLowerCase().replace(/[^a-zA-Z0-9-]/g, "") : '';
  return (baseSlug + (colorSlug ? "-" + colorSlug : '')).toLowerCase();
};

const AddProduct = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, "Forbidden: Only admin can add products"));
    }

    console.log("Incoming Request Body:", req.body);

    const {
      productname,
      brand,
      price,
      rating = 0,
      colors,
      sizes,
      shipping,
      returnType,
      description,
      fit,
      model,
      sustainability,
      photo,
      category,
    } = req.body;

    if (!productname || !price || !colors || !sizes || !shipping || !returnType || !description || !fit || !model || !photo || !category) {
      return next(errorHandler(400, "All required fields must be provided"));
    }

    if (!Array.isArray(colors) || colors.some(color => typeof color !== 'object' || !color.color || !color.photo || !color.quantity)) {
      return next(errorHandler(400, "Colors must be an array of objects with color, photo, and quantity fields"));
    }

    const slug = generateSlug(productname, brand, colors);

    const newProduct = new Product({
      productname,
      brand,
      price,
      rating,
      colors,
      sizes,
      shipping,
      returnType,
      description,
      fit,
      model,
      sustainability,
      photo,
      slug,
      userId: req.user.id,
      category,
    });

    console.log("Product to be saved:", newProduct);

    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully.",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    next(error);
  }
};

module.exports = { AddProduct };
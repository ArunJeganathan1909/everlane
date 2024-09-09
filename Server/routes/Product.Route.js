const express = require("express");
const { AddProduct } = require("../controllers/Product.Controller");
const VerifyToken = require("../utils/VerifyUser");
const Router = express.Router();

Router.post("/addNewProduct", VerifyToken, AddProduct);

module.exports = Router;

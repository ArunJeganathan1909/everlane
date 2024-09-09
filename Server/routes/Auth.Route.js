const express = require("express");
const { Signup, Signin } = require("../controllers/Auth.Controller");
const Router = express.Router();

Router.post("/signup", Signup);
Router.post("/signin", Signin)

module.exports = Router;

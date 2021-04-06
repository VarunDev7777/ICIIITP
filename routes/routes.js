const express = require("express")
const Router = express.Router();

const HomeControl = require("../controllers/Home.Controller");

Router.get("/", HomeControl.getHome);

module.exports = Router;
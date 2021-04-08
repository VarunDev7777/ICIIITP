const express = require("express")
const Router = express.Router();

const HomeControl = require("../controllers/Home.Controller");

Router.get("/", HomeControl.getHome);
Router.get("/about/", HomeControl.getAbout);
Router.get("/call-for-paper/", HomeControl.getcallForPapers);
Router.get("/register/", HomeControl.getRegister);
Router.get("/venue/", HomeControl.getVenue);
Router.get("/contact-us/", HomeControl.getContact);

module.exports = Router;
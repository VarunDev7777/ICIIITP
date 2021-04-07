const express = require("express")
const app = express();

// View Engine & Static File Routing
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"))

// Environment Variables
require("dotenv").config();

// Parsing Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/routes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server has started at PORT ${PORT}`));
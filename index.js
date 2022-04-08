// Parse environment variables
require("dotenv").config();

const { PORT } = process.env;

/**
 * Require dependencies
 *
 */
const express = require("express");

require("./config/database");

// Initialize express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle static files
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

// Routes
app.use(require("./routes/"));

// Start the server
// TODO: split server and express
app
  .listen(PORT)
  .on("listening", () => console.log("Server has been liftoff.", PORT));

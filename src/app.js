const connectDB = require("./database/db.config");
const express = require("express");
const app = express();

connectDB();

module.exports = app;

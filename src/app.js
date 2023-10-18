/**
 * Express Application.
 *
 * Here we create our Express application which
 * process all incomming request to our api endpoints.
 */

/////////////////////////////////////////////////////////////////////////////
// Here we import necessary modules required by application.
/////////////////////////////////////////////////////////////////////////////
// - Import the fs module
const fs = require('fs');
// - Import the path module
const path = require("path");
// - Importing dotenv module
const dotenv = require("dotenv");
// - Import the Express framework
const express = require("express");
// - Importing showdown module
const showdown = require("showdown");
// - Import the custom subscriber model module
const subscriberModel = require("./models/subscribers");

/////////////////////////////////////////////////////////////////////////////
// Create an Express Application
/////////////////////////////////////////////////////////////////////////////
const app = express();

// Get parsed env file
const env = dotenv.config().parsed;

// To serve static files in Express
app.use('/public',express.static('public'));
app.use('/resources',express.static('resources'));

// Register ejs as template render engine
app.engine('html', require('ejs').renderFile);

/////////////////////////////////////////////////////////////////////////////
// In this section we parse incomming request payload
/////////////////////////////////////////////////////////////////////////////
//Process incomming json request payload.
app.use(express.json());
//Process incomming urlencoded request payload.
app.use(express.urlencoded({ extended: false }));

// Export the Express application
module.exports = app;

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

/////////////////////////////////////////////////////////////////////////////
// In this section we handle incomming request with payload
/////////////////////////////////////////////////////////////////////////////
/**
 * The endpoint for serving home page.
 *
 * @auth none
 * @method GET
 * @access public
 * @url protocol://domain.tld/
 */
app.get("/", (req, res) => {
  // Template data
  const data = {};

  // Set showndown flavor
  showdown.setFlavor('github');

  // Markdown to html converter
  const converter = new showdown.Converter();

  // Get content of the README.md file
  const markdown = fs.readFileSync(
    path.join(__dirname, "/../README.md")
  );

  // Content type of the response
  res.set('Content-Type', 'text/html');
  
  // Serve the markdown 
  // documentation file as the home page
  data.readme = (Buffer.from(
    converter.makeHtml(markdown.toString())
  ));

  res.render(path.join(__dirname, "/views/index.html"), data);
});

/**
 * The api endpoint for showing
 * all subscribers list with details.
 *
 * @auth none
 * @method GET
 * @access public
 * @url protocol://domain.tld/subscribers
 */
app.get("/subscribers", async (req, res, next) => {
  try {
    // Retrieve all subscribers using model
    let subscribers = await subscriberModel.find();

    // Send the subscribers as a
    // JSON response with a status of 200 (OK)
    res.status(200).json(subscribers);
  } catch (err) {
    // Set the response status to 400 (Bad Request)
    res.status(400);
    // Pass the error to the error handling middleware
    next(err);
  }
});

/**
 * The api endpoint for showing all subscribers
 * with only two fields [name] and [subscribedChannel].
 *
 * @auth none
 * @method GET
 * @access public
 * @url protocol://domain.tld/subscribers/names
 */
app.get("/subscribers/names", async (req, res, next) => {
  try {
    // Retrieve subscribers with only the name
    // and subscribedChannel fields using model
    let subscribers = await subscriberModel.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );

    // Send the subscribers as a
    // JSON response with a status of 200 (OK)
    res.status(200).json(subscribers);
  } catch (err) {
    // Set the response status to 400 (Bad Request)
    res.status(400);
    // Pass the error to the error handling middleware
    next(err);
  }
});

// Export the Express application
module.exports = app;

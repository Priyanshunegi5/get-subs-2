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

/**
 * The api endpoint for showing
 * details of the subscriber for given id.
 *
 * @auth none
 * @method GET
 * @access public
 * @url protocol://domain.tld/subscribers/:id
 */
app.get("/subscribers/:id", async (req, res) => {
  try {
    // Extract the ID parameter from the request URL
    const id = req.params.id;

    if (!id) {
      // Send a JSON response
      // with a status of 400 (Bad Request)
      res.status(400).json({
        message: "No ID provided",
      });
      return;
    }

    // Find a subscriber with
    // the given ID using model
    const subscriber = await subscriberModel.findById(id);

    if (subscriber) {
      // Send the subscriber
      // details as the response
      res.send(subscriber);
      return;
    }

    // Send a JSON response
    // with a status of 404 (Not Found)
    res.status(404).json({ message: "Subscriber not found" });
  } catch (error) {
    // Send a JSON response with a status of
    // 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
});

/**
 * The api endpoint for showing error incase
 * route does not match with any existing route.
 *
 * @auth none
 * @method ANY
 * @access public
 * @url protocol://domain.tld/{WHEN_ROUTE_NOT_FOUND}
 */
app.use((req, res) => {
  // Send a JSON response with a status of 404 (Not Found)
  res.status(404).json({ message: "Error - Route not found" });
});

// Export the Express application
module.exports = app;

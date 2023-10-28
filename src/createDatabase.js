/**
 * Create Database.
 *
 * Here we create our database and seed it with sample data.
 */

/////////////////////////////////////////////////////////////////////////////
// Here we import necessary modules required for creating database.
/////////////////////////////////////////////////////////////////////////////
// - Importing dotenv module and
// - load .env file contents into process.env
require("dotenv").config();
// - Import the mongoose module
const mongoose = require("mongoose"); 
// - Import the database seeding data
const data = require("./database/data"); 
// - Importing the custom database module
const database = require("./database");
// - Import the custom subscriber model module
const subscriberModel = require("./models/subscribers"); 

// Get parsed env file contents
const env = process.env;

/////////////////////////////////////////////////////////////////////////////
// Connect to our database
/////////////////////////////////////////////////////////////////////////////
database.connect(
  env.DATABASE_URL,
  async (client) => {
    // Here we seed our database with sample documents

    // Delete all existing documents 
    // in the "subscribers" collection
    await subscriberModel.deleteMany({});
    // Insert new documents from the "data" 
    // array into the "subscribers" collection
    await subscriberModel.insertMany(data);

    // Disconnect from the database
    await client.disconnect();

    // Database successfuly connected
    console.info("Database successfully seeded");
  },
  (err, db) => {
    if (!err) {
      // Database successfuly connected
      console.debug("Database connected");
      return;
    }

    // Incase: something went wrong during database connection
    console.error("Database connection failed.");
    console.log(!env.APP_DEBUG ? err : err.stack);

    // Terminate the process synchronously
    process.exit(1);
  }
);

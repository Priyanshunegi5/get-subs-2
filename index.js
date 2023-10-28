/**
 * ExpressJs server (Entry Point).
 *
 * Here we setup up a server using Express.js.
 * Then connects it to a MongoDB database using Mongoose.
 */

/////////////////////////////////////////////////////////////////////////////
// Here we import necessary modules required by server.
/////////////////////////////////////////////////////////////////////////////
// - Importing dotenv module and
// - load .env file contents into process.env
require("dotenv").config();
// - Importing custom app module
const app = require("./src/app");
// - Importing the custom database module
const database = require("./src/database");

// Get parsed env file contents
const env = process.env;

/////////////////////////////////////////////////////////////////////////////
// Connect to our database
/////////////////////////////////////////////////////////////////////////////
database.connect(
  env.DATABASE_URL,
  async (client) => {
    // Here we listen incomming
    // request to our server application.
    app.listen(env.SERVER_PORT, () => {
      console.log(`Server is running at port:`, env.SERVER_PORT);
    });
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

// Export the Express application
module.exports = app;
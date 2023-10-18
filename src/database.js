/**
 * Connect to database.
 *
 * Here we make connection with MongoDB database using mongoose.
 */

// - Importing Mongoose module
const mongoose = require("mongoose");

/**
 * Connects to the MongoDB database using the provided URL.
 *
 * @param {String} uri - MongoDb database connection url
 * @param {Function} success - Callback to be executed upon successful connection.
 * @param {Function} failure - Callback to be executed if the connection fails.
 * @returns {void}
 */
const connect = (uri, success, failure) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    .then(success)
    .catch(failure);
};

// Export the connect method
module.exports = { connect };

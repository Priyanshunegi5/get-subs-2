/**
 * Subscriber Model.
 *
 * Here we create subscriber model using mongoose schema.
 */

/////////////////////////////////////////////////////////////////////////////
// Here we import necessary modules required by model.
/////////////////////////////////////////////////////////////////////////////
// - Import the mongoose module
const mongoose = require("mongoose");

/////////////////////////////////////////////////////////////////////////////
// Here we create subscriber schema
/////////////////////////////////////////////////////////////////////////////
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Export the Mongoose subscriber model
module.exports = mongoose.model("Subscriber", subscriberSchema);

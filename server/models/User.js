const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk Auth ID
  email: { type: String, required: true },
  name: { type: String },
});

module.exports = mongoose.model("User", UserSchema);

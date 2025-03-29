require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes from APIs folder
const authRoutes = require("./APIs/auth");
const listingRoutes = require("./APIs/listings");
const orderRoutes = require("./APIs/orders");

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/orders", orderRoutes);

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Agri")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

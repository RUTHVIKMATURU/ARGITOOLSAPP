const express = require("express");
const router = express.Router();
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

router.get("/me", ClerkExpressRequireAuth(), (req, res) => {
  res.json({ user: req.auth.user });
});

module.exports = router;

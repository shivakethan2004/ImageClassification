// database/route/fetch_face.js
const express = require("express");
const router = express.Router();
const pool = require("../db"); // Adjust the path to where db.js is located

// Route to fetch face data
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT label, section, descriptor FROM faces");
    res.json(result.rows);  // Sending the response as JSON
  } catch (err) {
    console.error("Error fetching face data:", err);
    res.status(500).json({ error: "Failed to fetch face data" });
  }
});

module.exports = router;

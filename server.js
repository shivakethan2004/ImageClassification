const express = require("express");
const path = require("path");
const pool = require("./database/db");
const facesRoutes = require('./database/route/fetch_face')
const app = express();

// Middleware to serve static files
app.use(express.static(__dirname));

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "bbtFaceRecognition.html"));
});
app.use("/faces", facesRoutes);

// Function to test PostgreSQL connection
async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Connected to PostgreSQL at:", res.rows[0].now);
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1); // Exit process if the database connection fails
  }
}

// Start Server after database connection is tested
testConnection().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
  });
});

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from QuakeScope backend!");
});

// Example earthquake endpoint (static for now)
app.get("/earthquakes", (req, res) => {
  res.json([
    { place: "California", magnitude: 4.5, date: "2025-09-30" },
    { place: "Japan", magnitude: 6.2, date: "2025-09-29" }
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

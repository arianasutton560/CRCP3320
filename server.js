const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from QuakeScope backend!");
});

// Example earthquake endpoint (static for now)
app.get("/earthquakes", async (req, res) => {
  try{
    const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
    const response = await axios.get(url);

    // Extract useful data
    const earthquakes = response.data.features.map(eq => ({
      id: eq.id,
      place: eq.properties.place,
      magnitude: eq.properties.mag,
      time: new Date(eq.properties.time).toISOString(),
      coordinates: eq.geometry.coordinates // [longitude, latitude, depth]
    }));
    res.json(earthquakes);
  } catch (error) {
    console.error("Error fetching earthquake data:", error);
    res.status(500).json({ error: "Failed to fetch earthquake data" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

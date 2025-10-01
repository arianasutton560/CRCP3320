const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose"); //MongoDB
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from QuakeScope backend!");
});

//connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/quakescope", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Define a schema
const earthquakeSchema = new mongoose.Schema({
  id: String,
  place: String,
  magnitude: Number,
  time: Date,
  coordinates: [Number], // [longitude, latitude, depth]
});

//Make model
const Earthquake = mongoose.model("Earthquake", earthquakeSchema);

app.use(express.json());

//Root the routes
app.get("/", (req, res) => {
  res.send("Hello from QuakeScope backend + MongoDB");
});

//Fetch and save earthquakes
app.get("/earthquakes/update", async (req, res) => {
  try {
    const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
    const response = await axios.get(url);

    const earthquakes = response.data.features.map(eq => ({
      id: eq.id,
      place: eq.properties.place,
      magnitude: eq.properties.mag,
      time: new Date(eq.properties.time),
      coordinates: eq.geometry.coordinates // [longitude, latitude, depth]
    }));
    //insert into MongoDB
    for(const quake of earthquakes){
      await Earthquake.updateOne({id: quake.id}, quake, {upsert: true});
    }

    res.json({ message: "Earthquakes updated", count: earthquakes.length });
  }catch(error){
    console.error("Error fetching earthquakes:", error);
    res.status(500).json({ error: "Failed to fetch earthquake data" });
  }
});

//Retrieve stored earthquakes
app.get("/earthquakes", async (req, res) => {
  const quakes = await Earthquake.find().sort({ time: -1 }).limit(50);
  res.json(quakes);
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

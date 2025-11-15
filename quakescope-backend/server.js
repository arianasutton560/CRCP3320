//This file holds javascript for my backend server

const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose"); //MongoDB
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from QuakeScope backend!");
});

//connect to MongoDB
mongoose.connect("mongodb+srv://agsutton_db_user:Mi2hermanas$$@quakescope.0uesbu2.mongodb.net/?retryWrites=true&w=majority&appName=QuakeScope")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error(" MongoDB connection error:", err));


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
    const response = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );
    const data = await response.json();

    const earthquakes = data.features.map((feature) => ({
      place: feature.properties.place,
      magnitude: feature.properties.mag,
      time: new Date(feature.properties.time),
      coordinates: feature.geometry.coordinates,
    }));

    await Earthquake.insertMany(earthquakes);
    res.json({ message: "Earthquakes updated", count: earthquakes.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Retrieve stored earthquakes
app.get("/earthquakes", async (req, res) => {
  try {
        const quakes = await Earthquake.find().limit(20);
        const formatted = quakes.map(q => ({
        _id: q._id,
        place: q.place,
        magnitude: q.magnitude,
        time: q.time,
        latitude: q.coordinates[1],
        longitude: q.coordinates[0],
      }));
      res.json(formatted);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

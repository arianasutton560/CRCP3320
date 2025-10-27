//This is the Javascript file for your visual data page
import React, { useEffect, useState } from "react";
import EarthquakeMap from "../Components/EarthquakeMap";
import EarthquakeCharts from "../Components/EarthquakeCharts";

function VisualData() {
  const [quakes, setQuakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/earthquakes") // ✅ Make sure backend is on port 3000
      .then((res) => res.json())
      .then((data) => setQuakes(data))
      .catch((err) => console.error("Error fetching quakes:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>🌍 QuakeScope Dashboard</h1>

      {/* 🌎 Map Section */}
      <div style={{ margin: "20px 0" }}>
        <EarthquakeMap quakes={quakes} />
      </div>

      {/* 📋 Table in the middle */}
      <div style={{ margin: "40px 0" }}>
        <h2 style={{ textAlign: "center" }}>Recent Earthquakes</h2>
        <table
          border="1"
          cellPadding="8"
          style={{
            borderCollapse: "collapse",
            width: "80%",
            margin: "0 auto", // Centers table horizontally
            textAlign: "left",
            backgroundColor: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th>Location</th>
              <th>Magnitude</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {quakes.map((quake) => (
              <tr key={quake._id}>
                <td>{quake.place}</td>
                <td>{quake.magnitude}</td>
                <td>{new Date(quake.time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📊 Charts Section */}
      <div style={{ marginTop: "40px" }}>
        <EarthquakeCharts quakes={quakes} />
      </div>
    </div>
  );
}

export default VisualData;



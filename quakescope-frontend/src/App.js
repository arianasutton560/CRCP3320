import React, { useEffect, useState } from "react";

function App() {
  const [quakes, setQuakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/earthquakes")
      .then((res) => res.json())
      .then((data) => setQuakes(data))
      .catch((err) => console.error("Error fetching quakes:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 QuakeScope</h1>
      <h2>Recent Earthquakes</h2>

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
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
  );
}

export default App;


import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer
} from 'recharts';

const EarthquakeCharts = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetch('/earthquakes')
      .then(res => res.json())
      .then(data => setEarthquakes(data))
      .catch(err => console.error('Error fetching earthquakes:', err));
  }, []);

  // Group by magnitude ranges
  const magnitudeData = [
    { range: '0-2', count: earthquakes.filter(e => e.magnitude < 2).length },
    { range: '2-4', count: earthquakes.filter(e => e.magnitude >= 2 && e.magnitude < 4).length },
    { range: '4-6', count: earthquakes.filter(e => e.magnitude >= 4 && e.magnitude < 6).length },
    { range: '6+', count: earthquakes.filter(e => e.magnitude >= 6).length },
  ];

  // Sort by time for line chart
  const timeData = earthquakes
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .map(e => ({
      date: new Date(e.time).toLocaleDateString(),
      magnitude: e.magnitude,
    }));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        flexWrap: 'wrap', // ✅ makes it responsive
        marginTop: '40px',
      }}
    >
      {/* Bar Chart: Frequency by Magnitude */}
      <div
        style={{
          width: '500px',
          height: '300px',
          background: '#f9f9f9',
          borderRadius: '12px',
          padding: '10px 20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>Frequency by Magnitude</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={magnitudeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#007acc" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart: Magnitude Over Time */}
      <div
        style={{
          width: '500px',
          height: '300px',
          background: '#f9f9f9',
          borderRadius: '12px',
          padding: '10px 20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>Magnitude Over Time</h3>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={timeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="magnitude" stroke="#ff5733" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarthquakeCharts;


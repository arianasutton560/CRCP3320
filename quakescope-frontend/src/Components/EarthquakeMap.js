import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const EarthquakeMap = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetch('/earthquakes')
      .then(res => res.json())
      .then(data => setEarthquakes(data))
      .catch(err => console.error(err));
  }, []);

  const getMarkerColor = (magnitude) => {
    if (magnitude >= 6) return 'red';
    if (magnitude >= 4) return 'orange';
    return 'green';
  };

  const createIcon = (magnitude) => {
    return L.divIcon({
      className: 'custom-icon',
      html: `<div style="
        background-color:${getMarkerColor(magnitude)};
        width:12px;
        height:12px;
        border-radius:50%;
        border:1px solid white;"></div>`
    });
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {earthquakes.map((eq, index) => (
          <Marker
            key={index}
            position={[eq.latitude, eq.longitude]}
            icon={createIcon(eq.magnitude)}
          >
            <Popup>
              <strong>{eq.place}</strong><br />
              Magnitude: {eq.magnitude}<br />
              Date: {new Date(eq.time).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default EarthquakeMap;

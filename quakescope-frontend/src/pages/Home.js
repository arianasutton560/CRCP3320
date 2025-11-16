

function Home() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main layout: text left, image right */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "30px",
        }}
      >
        {/* LEFT: Text content */}
        <div style={{ maxWidth: "700px" }}>
          <h1>QuakeScope</h1>
          <h2 style={{ fontWeight: "normal" }}>
            Visualizing recent earthquake activity with a full-stack web app
          </h2>

          <p style={{ lineHeight: 1.6 }}>
            QuakeScope is a full-stack application that collects real earthquake
            data from the USGS Earthquake API, stores it in a MongoDB Atlas
            database through a Node.js/Express backend, and displays it using a
            React frontend with interactive charts and maps.
          </p>

          <h3>How to use this site</h3>
          <ul style={{ lineHeight: 1.6 }}>
            <li>
              Go to the <strong>Visual Data</strong> page to see recent
              earthquakes plotted on a map and in charts.
            </li>
            <li>
              Use the table and visuals to explore magnitudes, locations, and
              times of recent events.
            </li>
            <li>
              Visit the <strong>About</strong> page to read about how the
              backend uses server-side scripting and routing.
            </li>
          </ul>

          <h3>Technologies Used</h3>
          <p style={{ lineHeight: 1.6 }}>
            <strong>Backend:</strong> Node.js, Express, MongoDB Atlas, Mongoose
            <br />
            <strong>Frontend:</strong> React, React Router, JavaScript, HTML,
            CSS
            <br />
            <strong>Data Source:</strong> USGS Earthquake GeoJSON feed
          </p>

          <h3>Map Legend</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "green",
                  display: "inline-block",
                }}
              ></span>
              <span>Minor earthquakes (magnitude &lt; 4.0)</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  display: "inline-block",
                }}
              ></span>
              <span>Moderate earthquakes (magnitude 4.0 – 5.9)</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  display: "inline-block",
                }}
              ></span>
              <span>Severe earthquakes (magnitude 6.0+)</span>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <a
              href="/VisualData"
              style={{
                marginRight: "10px",
                padding: "10px 16px",
                textDecoration: "none",
                borderRadius: "6px",
                border: "1px solid #333",
              }}
            >
              View Visual Data
            </a>

            <a
              href="/About"
              style={{
                padding: "10px 16px",
                textDecoration: "none",
                borderRadius: "6px",
                border: "1px solid #333",
              }}
            >
              Learn More About the Project
            </a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div
          style={{
            marginLeft: "40px",
          }}
        >
          <img
            src="/world.png" 
            alt="Earthquake visualization"
            style={{
              width: "600px",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;




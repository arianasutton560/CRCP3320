
function About() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1>About QuakeScope</h1>

      <p>
        QuakeScope is a full-stack web application designed to visualize recent
        earthquake activity around the world. It combines a Node.js/Express
        backend, a MongoDB Atlas database, and a React frontend to show real
        earthquake data using tables, charts, and a map.
      </p>

      <h2>Project Overview</h2>
      <p>
        The main goal of this project is to take real-time earthquake data from
        the USGS Earthquake API, process and store it on my own server, and then
        display it in a clear and interactive way for users. The application
        demonstrates how a client can communicate with a server
        , which in turn talks to an external API and a database
        .
      </p>

      <h2>Server-Side Scripting</h2>
      <p>
        On the server side, I use Node.js and Express to run code that never
        runs in the browser. The backend connects to a MongoDB Atlas database
        using Mongoose and defines an earthquake schema with fields
        such as place, magnitude, time, and coordinates. One of the key routes,
        "/earthquakes/update", fetches fresh data from the USGS
        Earthquake API, transforms it into a simpler format, and saves it into
        MongoDB. Another route, "/earthquakes", reads the stored
        data from the database and returns it as JSON for the frontend. This
        logic is an example of server-side scripting because it happens entirely
        on the server before anything is sent back to the user.
      </p>

      <h2>Routing</h2>
      <p>
        This project uses routing on both the backend and the frontend.
        On the backend, Express routes determine how different URLs are handled:
      </p>
      <ul>
        <li>
          <code>/</code> – returns a simple message confirming the backend is running.
        </li>
        <li>
          /earthquakes/update – fetches new earthquake data from USGS
          and stores it in MongoDB.
        </li>
        <li>
          /earthquakes – retrieves stored earthquake data and returns it as JSON.
        </li>
      </ul>
      <p>
        On the frontend, I use React Router to provide client-side routing
        between the main pages of the app:
      </p>
      <ul>
        <li>
          <strong>Home</strong> – introduction to QuakeScope and how to use the site.
        </li>
        <li>
          <strong>About</strong> – this page, which explains the project
          structure and technologies.
        </li>
        <li>
          <strong>Visual Data</strong> – displays the earthquake data in a table,
          charts, and an interactive map.
        </li>
      </ul>
      <p>
        Together, these routes demonstrate how URLs are mapped to specific
        pieces of code on the server and to specific components in the frontend.
      </p>

      <h2>Data Source and Visualization</h2>
      <p>
        The data for QuakeScope comes from the USGS Earthquake GeoJSON feed,
        which provides up-to-date information about recent earthquakes around
        the world. After the backend processes and stores this data, the React
        frontend fetches it from the "/earthquakes" API route and
        visualizes it:
      </p>
      <ul>
        <li>A table listing recent earthquakes, including magnitude and location.</li>
        <li>
          Charts that summarize earthquake magnitudes over time or by category.
        </li>
        <li>
          A map with colored markers (green, yellow, red) that indicate minor,
          moderate, and severe earthquakes.
        </li>
      </ul>

      <h2>Technologies Used</h2>
      <p>
        <strong>Backend:</strong> Node.js, Express, MongoDB Atlas, Mongoose
        <br />
        <strong>Frontend:</strong> React, React Router, JavaScript, HTML, CSS
        <br />
        <strong>Data Source:</strong> USGS Earthquake GeoJSON feed
      </p>

      <h2>How to Use the Application</h2>
      <p>
        To explore the data, start on the Home page for an overview and then
        navigate to the Visual Data page. There, you can see recent earthquakes
        along with a legend that explains the marker colors (green for minor,
        yellow for moderate, and red for severe). The About page is intended to
        explain the technical side of the project, including how server-side
        scripting and routing are used to move data from the USGS API, through
        the backend and database, and into the frontend visualizations.
      </p>
    </div>
  );
}

export default About;


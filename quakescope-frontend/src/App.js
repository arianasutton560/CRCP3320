// This file holds the links to your different pages

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VisualData from "./pages/VisualData"; 

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/visualdata">Visual Data</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visualdata" element={<VisualData />} />
      </Routes>
    </Router>
  );
}

export default App;



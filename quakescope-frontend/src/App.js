import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VisualData from "./pages/VisualData"; 

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/About">About</Link> | <Link to="/VisualData">Visual Data</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/VisualData" element={<VisualData />} />
      </Routes>
    </Router>
  );
}

export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutNavbar from "./components/LayoutNavbar.jsx";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { PageProjects } from "./pages/Projects";
import './App.css';

function App() {
  return (
    <Router>
      <LayoutNavbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/proyecto/:nameProject" element={<Project />} />
          <Route path="/proyectos" element={<PageProjects />} />
        </Routes>
      </LayoutNavbar>
    </Router>
  );
}

export default App;

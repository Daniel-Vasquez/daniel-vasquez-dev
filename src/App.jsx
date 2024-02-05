import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutNavbar from "./components/LayoutNavbar.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import { projects } from "./projects.json";
import './App.css';
console.log({ projects });

function App() {
  return (
    <Router>
      <LayoutNavbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project/:nameProject" element={<Project />} />
        </Routes>
      </LayoutNavbar>
    </Router>
  );
}

export default App;
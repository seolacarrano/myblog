import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div id="page-body">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/projectslist" element={<ProjectsListPage/>} />
          <Route path="/projectslist/:projectId" element={<ProjectPage/>} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

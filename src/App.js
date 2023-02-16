import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsListPage from './ProjectsListPage';
import ProjectPage from './ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <p>My Blog</p>
      <div id="page-body">
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

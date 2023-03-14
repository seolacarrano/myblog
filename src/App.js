import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

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
          <Route path="/project/:projectId" element={<ProjectPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
      </div>
      <footer>
        <p>© 2023 Seola Carrano</p>
        <a className="email" href="mailto: carrano.seola@gmail.com" target="_blank">carrano.seola@gmail.com</a>
      </footer>
    </BrowserRouter>
  );
}

export default App;

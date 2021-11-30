import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe';
import Notfound from './Pages/NotFound/Notfound';


function App() {
  return (
    <div className="App" id="app" style={{ backgroundColor: '#242424', color: 'white' }}>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path='*' element={<Notfound />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

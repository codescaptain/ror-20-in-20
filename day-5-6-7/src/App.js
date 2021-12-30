import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="about" element={<About />} />
        <Route path="post" element={<Post />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="project" element={<Project />}  />
      </Routes>
    </Router>
    
  );
}

export default App;

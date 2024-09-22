import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
// import ImgAbout from "./images/aboutImg.jpg"
function App() {
  return (
    <div id="home" className="App">
      <Navbar/>      
      <Home/>
      <div id="about" className="aboutImg">
        <h1 className="aboutText">About</h1>
      </div>
      <About />
      <div id="projects" >
        <h1 className="projectText">Projects</h1>
      </div>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

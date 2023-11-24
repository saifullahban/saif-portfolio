import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './portfilo/About';
import Navbarnav from './portfilo/Navbarnav';
import Experience from './portfilo/Experience';
import Project from './portfilo/Project';
import Contact from './portfilo/Contact';
import Footer from './portfilo/Footer';
import Home from './portfilo/Home';

function App() {
  return (
    <div>
      <Navbarnav/>
       <Home/>
       <About/>
       <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;

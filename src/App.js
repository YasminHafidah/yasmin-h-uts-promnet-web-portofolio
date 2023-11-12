import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Service from "./component/Services";
import RecentWork from "./component/RecentWork";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "../src/App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route  path="/about" element={<AboutMe/>}/>
          <Route  path="/services" element={<Service/>}/>
          <Route  path="/recentwork" element={<RecentWork/>}/>
          <Route  path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
 );
}

export default App;

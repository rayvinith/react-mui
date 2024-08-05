
import './App.css';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Team from './components/Team';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/home" element={ <Layout/>} /> 
      <Route path="/" element={ <Layout/>} /> 
          <Route path="/about" element={ <Hero/>} /> 
          <Route path="/contact" element={  <Contact/>}  />
          <Route path="/team" element={  <Team/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/our-team" element={   <Team/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

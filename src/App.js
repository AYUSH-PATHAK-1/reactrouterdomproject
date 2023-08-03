import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import More from './Components/More';
import './App.css';

const App = () => {
  return ( 
    <>
      <Navbar />
      <Routes>      
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact  element={<About />} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="/More" exact element={<More />} />       
        </Routes>
        
        
        </>
  );
};

export default App;

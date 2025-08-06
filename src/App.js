import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Ourservice from './Components/Ourservice';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Testimonials from './Components/Testimonial';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path='/shit' element={<Hero />} />
        <Route path='/services' element={<Ourservice />} />
        <Route path='/about' element={<About />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

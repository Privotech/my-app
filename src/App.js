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
import Account from './Components/Account';
import Setting from './Components/Setting';
import Transfer from './Components/Transfer';
import Card from './Components/Card';
import Transactionreceipt from './Components/Transactionreceipt';

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
        <Route path='/Account' element={<Account />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/transfers' element={<Transfer />} />
        <Route path='/cards' element={<Card />} />
        <Route path='/transactions' element={<Transactionreceipt />} />
      </Routes>
    </div>
  );
}

export default App;

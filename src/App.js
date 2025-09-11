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

import Dashboard from './Pages/Dashboard';
import Account from './Pages/Account';
import Setting from './Pages/Setting';
import Transfer from './Pages/Transfer';
import Card from './Pages/Card';
import Transactionreceipt from './Pages/Transactionreceipt';
import Analysis from './Pages/Analysis';
import Deposit from './Pages/Deposit';
import Support from './Pages/Support';

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
        <Route path='/signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/transfers' element={<Transfer />} />
        <Route path='/cards' element={<Card />} />
        <Route path='/transactions' element={<Transactionreceipt />} />
        <Route path='/Analysis' element={<Analysis />} />
        <Route path='/Deposit' element={<Deposit />} />
        <Route path='/Support' element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;

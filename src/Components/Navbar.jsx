import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold text-primary" to="/">PrivoBank💎</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/faq">FAQ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Testimonials">Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Login" className="btn btn-outline-primary ms-3">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="btn btn-outline-primary ms-3">SignUp</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Hero />
      <Footer />
    </>
  )
}

export default Navbar
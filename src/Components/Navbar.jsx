import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid px-3 px-md-5">
          <Link className="navbar-brand fw-bold text-primary" to="/">PrivoBank💎</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
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
              <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Testimonials">Testimonials</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link to="/Login" className="btn btn-outline-primary ms-2">Login</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link to="/signup" className="btn btn-outline-primary ms-2">SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Hero />
      <Footer />
    </>
  )
}


export default Navbar
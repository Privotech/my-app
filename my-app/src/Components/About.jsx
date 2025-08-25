import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const About = () => {
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


      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h2 className="card-title mb-3 text-primary fw-bold">About Us</h2>
                <p className="card-text fs-5">
                  PrivoBank is committed to providing secure, innovative, and accessible financial services for individuals and businesses. Our mission is to empower our clients with the tools and support they need to achieve financial success, while building lasting relationships based on trust and transparency.
                </p>
                <h4 className="mt-4 mb-2 text-success fw-semibold">Our Core Values</h4>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item">Security</li>
                  <li className="list-group-item">Accessibility</li>
                  <li className="list-group-item">Innovation</li>
                  <li className="list-group-item">Customer Focus</li>
                  <li className="list-group-item">Integrity</li>
                  <li className="list-group-item">Transparency</li>
                </ul>
                <h5 className="fw-bold mb-2">Our Journey</h5>
                <ul className="timeline list-unstyled">
                  <li><strong>2015:</strong> PrivoBank was founded with a vision to revolutionize digital banking in Africa.</li>
                  <li><strong>2017:</strong> Launched our first mobile banking app, making banking accessible to more people.</li>
                  <li><strong>2019:</strong> Expanded our services to include business and investment solutions.</li>
                  <li><strong>2022:</strong> Introduced AI-powered financial advisory and enhanced security features.</li>
                  <li><strong>2025:</strong> Serving thousands of satisfied customers with a commitment to innovation and trust.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
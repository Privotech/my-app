import React from 'react'

const Faq = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">PrivoBank💎</a>
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
              <a className="nav-link active" href="http://localhost:3001/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3001/shits">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3001/about">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3001/Contact">Contact</a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3001/faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">Testimonials</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary ms-3">Login</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary ms-3">SignUp</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    </div>
  )
}

export default Faq
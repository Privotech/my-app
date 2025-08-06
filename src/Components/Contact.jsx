import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        if (name && email && message) {
            let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            messages.push({ name, email, message, date: new Date().toISOString() });
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            alert('Message sent successfully!');
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactMessage').value = '';
        }
    };
    return (
        <>
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



        <div className="container-fluid my-5">
            <div className="row justify-content-center">
                <div className="col-02 col-md-8 col-lg-6">
                    <div className="card shadow-lg bg-warning-subtle border-0">
                        <div className="card-body p-4">
                            <h2 className="card-title mb-3 text-primary fw-bold text-center">Contact Us</h2>
                            <p className="mb-4 text-center">Have a question or need help? Fill out the form below and our team will get back to you as soon as possible.</p>
                            <form onSubmit={handleContactSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="contactName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="contactName" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="contactEmail" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactMessage" className="form-label">Message</label>
                                    <textarea className="form-control" id="contactMessage" rows="4" placeholder="Type your message..." required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                                </div>
                            </form>
                            <hr className="my-4" />
                            <div className="text-center mb-4">
                                <h5 className="fw-bold mb-2">Other Ways to Reach Us</h5>
                                <p className="mb-0"><i className="bi bi-geo-alt-fill me-2"></i>Address:  ........, ogbomoso, oyo state, Nigeria</p>
                                <p className="mb-0"><i className="bi bi-envelope-fill me-2"></i>Email: privilegeoyegbile@gmail.com</p>
                                <p className="mb-0"><i className="bi bi-telephone-fill me-2"></i>Phone number: +234 708 4689 043</p>
                                <p className="mb-0"><i className="bi bi-whatsapp me-2 text-success"></i>WhatsApp: +234 904 4058 809</p>
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                    <a href="#" className="text-primary fs-5" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="text-info fs-5" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="text-danger fs-5" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="text-dark fs-5" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6 className="fw-bold mb-2 text-center">Find Us on the Map</h6>
                                <div className="ratio ratio-06x9 rounded shadow-sm overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps?q=ogbomoso,+oyo+state,+Nigeria&output=embed"
                                        title="PrivoBank Location"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        style={{ border: 0 }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
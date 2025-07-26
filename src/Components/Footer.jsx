import React from 'react'


const Footer = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('emailAddress').value;
        if (email) {
            // Save to localStorage (append to a list)
            let emails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]');
            emails.push(email);
            localStorage.setItem('newsletterEmails', JSON.stringify(emails));
            alert('Subscription successful');
            document.getElementById('emailAddress').value = '';
        }
    };
    return (
        <footer className="bg-light text-dark pt-5 pb-3 mt-5 border-top">
            <div className="container">
                <div className="row gy-4 align-items-start">
                    {/* Brand & Description */}
                    <div className="col-12 col-md-4 text-md-start text-center">
                        <h4 className="fw-bold text-primary mb-2">PrivoBank💎</h4>
                        <p className="mb-2">Empowering your financial future with secure, innovative, and accessible banking solutions.</p>
                        <div className="d-flex gap-3 justify-content-md-start justify-content-center">
                            <a href="#" className="text-primary fs-5" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-info fs-5" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-danger fs-5" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-dark fs-5" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-decoration-none text-dark">Home</a></li>
                            <li><a href="#about" className="text-decoration-none text-dark">About</a></li>
                            <li><a href="#services" className="text-decoration-none text-dark">Services</a></li>
                            <li><a href="#contact" className="text-decoration-none text-dark">Contact</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div className="col-6 col-md-3">
                        <h6 className="fw-bold mb-3">Contact Us</h6>
                        <ul className="list-unstyled mb-0">
                            <li><i className="bi bi-geo-alt-fill me-2"></i>........, ogbomoso,oyo state, Nigeria</li>
                            <li><i className="bi bi-envelope-fill me-2"></i>privilegeoyegbile@gmail.com</li>
                            <li><i className="bi bi-telephone-fill me-2"></i>+234 708 4689 043</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className="col-12 col-md-3 mt-4 mt-md-0">
                        <h6 className="fw-bold mb-3">Newsletter</h6>
                        <form className="d-flex flex-column flex-sm-row gap-2" onSubmit={handleNewsletterSubmit}>
                            <input type="email" className="form-control" placeholder="Your email" aria-label="Email" id="emailAddress" />
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </form>
                        <div className="mt-4">
                            <h6 className="fw-bold mb-2">Download Our App</h6>
                            <div className="d-flex gap-2 justify-content-md-start justify-content-center">
                                <a href="#" aria-label="Download on App Store">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" style={{ height: '32px' }} />
                                </a>
                                <a href="#" aria-label="Get it on Google Play">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '32px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                        <h6 className="fw-bold mb-2">Opening Hours</h6>
                        <ul className="list-unstyled small mb-0">
                            <li>Mon - Fri: 8:00am - 6:00pm</li>
                            <li>Saturday: 9:00am - 4:00pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mb-2 mb-md-0 text-center">
                        <h6 className="fw-bold mb-2">Legal</h6>
                        <ul className="list-inline small mb-0">
                            <li className="list-inline-item"><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none text-muted">Terms of Service</a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none text-muted">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-md-end text-center">
                        <h6 className="fw-bold mb-2">Accessibility</h6>
                        <p className="small mb-0">We are committed to ensuring accessibility for all users. <a href="#" className="text-decoration-none text-muted">Learn more</a></p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center small text-muted">
                    &copy; {new Date().getFullYear()} PrivoBank. All rights reserved.
                </div>
            </div>
        </footer>
    )

}

export default Footer
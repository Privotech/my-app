import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import laga from '../laga.png';
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <div>
                <div
                    className="container-fluid py-5 mt-5"
                    style={{
                        backgroundImage:
                            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROc2lTxrXbD94pSpjoxPoNtYrQ5zLeFLsQBxC7B6RTSLg_OEwuznQRVKlvke58G1TG-zmD&s)',
                        minHeight: '60vh',
                        backgroundSize: 'cover',
                        color: 'white',
                    }}
                >
                    <div className="row align-items-center justify-content-center text-center">
                        <div className=" col-md-6 mb-4 ">
                            <h1 className="display-4 fw-bold">Welcome to PrivoBank</h1>
                            <p className="lead">Your trusted partner in financial services</p>
                            <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                        <div className=" col-md-6 d-flex justify-content-center">
                            <img
                                src={laga}
                                alt="PrivoBank Hero"
                                className="img-fluid"
                                style={{ maxWidth: '350px', height: 'auto', borderRadius: '30px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us Section */}
            <div className="container-fluid my-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 col-lg-8">
                        <div className="card shadow-lg border-0" style={{ backgroundColor: '#90fff6ff' }}>
                            <div className="card-body p-4">
                                <h2 className="card-title mb-3 text-primary fw-bold">About Us</h2>
                                <p className="card-text fs-5">
                                    PrivoBank is dedicated to providing secure, innovative, and customer-focused financial services. Our mission is to empower individuals and businesses with the tools and support they need to achieve financial success. We believe in transparency, trust, and building lasting relationships with our clients.<br /><br />
                                    Since our founding, we have embraced technology and forward-thinking strategies to deliver seamless banking experiences. Our team is passionate about helping you reach your financial goals, whether you are saving for the future, growing your business, or seeking expert advice.<br /><br />
                                    At PrivoBank, we prioritize security, integrity, and customer satisfaction above all else. Join us on a journey to financial empowerment and discover the difference a truly dedicated banking partner can make.
                                </p>
                                <div className="mt-4">
                                    <h5 className="fw-semibold mb-1">Founder</h5>
                                    <p className="mb-0">Privilege Oyegbile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Team Section */}
            <div className="container-fluid my-5">
                <div className="row justify-content-center">
                    <div className=" col-md-10 col-lg-8">
                        <div className="card shadow-lg border-3 bg-success-subtle">
                            <div className="card-body p-4">
                                <h1 className="card-title mb-3 text-success fw-bold text-center">Our Team</h1>
                                <div className="row gy-4">
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Privilege+Oyegbile&background=0D8ABC&color=fff&size=128" alt="Privilege Oyegbile" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Privilege Oyegbile</h5>
                                        <p className="text-muted mb-0">Founder & CEO</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=James+Adelabu&background=6c757d&color=fff&size=128" alt="James Adelabu" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">James Adelabu</h5>
                                        <p className="text-muted mb-0">Chief Operations Officer</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Praise+Oyegbile&background=343a40&color=fff&size=128" alt="Praise Oyegbile" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Praise Oyegbile</h5>
                                        <p className="text-muted mb-0">Chief Technology Officer</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Rapheal+Adex&background=28a745&color=fff&size=128" alt="Rapheal Adex" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Rapheal Adex</h5>
                                        <p className="text-muted mb-0">Head of Customer Success</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Samuel+Adeyemi&background=ffc107&color=343a40&size=128" alt="Samuel Adeyemi" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Samuel Adeyemi</h5>
                                        <p className="text-muted mb-0">Finance Manager</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Fatima+Okafor&background=fd7e14&color=fff&size=128" alt="Fatima Okafor" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Fatima Okafor</h5>
                                        <p className="text-muted mb-0">Legal Advisor</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Michael+Franklin&background=6610f2&color=fff&size=128" alt="Michael Franklin" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Michael Franklin</h5>
                                        <p className="text-muted mb-0">Marketing Lead</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Linda+Adamu&background=20c997&color=fff&size=128" alt="Linda Adamu" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Linda Adamu</h5>
                                        <p className="text-muted mb-0">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security and Trust Section */}
            <div className="container-fluid my-5">
                <div className="row justify-content-center">
                    <div className=" col-md-10 col-lg-8">
                        <div className="card shadow-lg border-0 bg-warning-subtle">
                            <div className="card-body p-4">
                                <h2 className="card-title mb-3 text-primary fw-bold text-center">Security &amp; Trust</h2>
                                <p className="card-text fs-5 text-center">
                                    At PrivoBank, your security and trust are our top priorities. We employ industry-leading security measures to protect your personal and financial information at all times.
                                </p>
                                <div className="row text-center mt-4 g-4">
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-shield-lock fs-1 text-success mb-2"></i>
                                        <h5 className="fw-bold">Advanced Encryption</h5>
                                        <p className="small">All transactions and data are protected with state-of-the-art encryption technology.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-fingerprint fs-1 text-primary mb-2"></i>
                                        <h5 className="fw-bold">Multi-factor Authentication</h5>
                                        <p className="small">Your account is secured with multi-factor authentication for extra peace of mind.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-award fs-1 text-warning mb-2"></i>
                                        <h5 className="fw-bold">Regulatory Compliance</h5>
                                        <p className="small">We comply with all financial regulations and best practices to keep your money safe.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-eye-slash fs-1 text-secondary mb-2"></i>
                                        <h5 className="fw-bold">Privacy Protection</h5>
                                        <p className="small">We never share your data without your consent and follow strict privacy policies.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-clock-history fs-1 text-info mb-2"></i>
                                        <h5 className="fw-bold">24/7 Fraud Monitoring</h5>
                                        <p className="small">Our systems monitor for suspicious activity around the clock to keep your account safe.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-people fs-1 text-dark mb-2"></i>
                                        <h5 className="fw-bold">Dedicated Support</h5>
                                        <p className="small">Our support team is always available to help you with any security concerns.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-phone-vibrate fs-1 text-primary mb-2"></i>
                                        <h5 className="fw-bold">Instant Transaction Alerts</h5>
                                        <p className="small">Receive real-time notifications for every transaction on your account.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-lock-fill fs-1 text-danger mb-2"></i>
                                        <h5 className="fw-bold">Account Lock Feature</h5>
                                        <p className="small">Easily lock your account instantly if you suspect any unauthorized activity.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-patch-check-fill fs-1 text-success mb-2"></i>
                                        <h5 className="fw-bold">Verified by Regulators</h5>
                                        <p className="small">Certified and regularly audited by top financial authorities.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-cloud-arrow-down-fill fs-1 text-info mb-2"></i>
                                        <h5 className="fw-bold">Secure Cloud Storage</h5>
                                        <p className="small">Your data is stored securely in the cloud with multiple backups.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-person-badge-fill fs-1 text-warning mb-2"></i>
                                        <h5 className="fw-bold">Employee Background Checks</h5>
                                        <p className="small">All staff undergo rigorous background checks and security training.</p>
                                    </div>
                                    <div className=" col-sm-6 col-md-4">
                                        <i className="bi bi-shield-check fs-1 text-success mb-2"></i>
                                        <h5 className="fw-bold">Insurance Protection</h5>
                                        <p className="small">Your deposits are insured for extra peace of mind.</p>
                                    </div>
                                </div>
                                <div className="alert alert-success mt-4 text-center" role="alert">
                                    <strong>Trusted by thousands</strong> — Join our community and experience secure, reliable banking.
                                </div>
                                <div className="card mt-4 border-0 shadow-lg-sm bg-white">
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0 text-center">
                                            <p className="mb-2">“I feel safe banking with PrivoBank. Their security features give me peace of mind every day.”</p>
                                            <footer className="blockquote-footer">James oyegbile,
                                                <cite title="Customer">Customer</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Call to Action Strip */}
            <div className="container-fluid py-5 bg-primary text-white mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 text-center">
                        <h2 className="fw-bold mb-3">Ready to Experience Secure Banking?</h2>
                        <p className="lead mb-4">Join thousands of satisfied customers who trust PrivoBank for their financial needs. Open your account today and take the first step toward a brighter financial future!</p>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3">
                            <Link to="/signup" className="btn btn-light btn-lg fw-semibold shadow-sm">Open an Account</Link>
                            <a href="tel: +234 708 4689 042" className="btn btn-outline-light btn-lg fw-semibold shadow-sm">Call Us: +234 708 4689 042</a>
                        </div>
                        <div className="mt-4">
                            <div id="ctaCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <blockquote className="blockquote text-center">
                                            <p className="mb-2">“Switching to PrivoBank was the best decision for my business. The support team is always there!”</p>
                                            <footer className="blockquote-footer text-white">Precious enoch, <cite title="Customer">Customer</cite></footer>
                                        </blockquote>
                                    </div>
                                    <div className="carousel-item">
                                        <blockquote className="blockquote text-center">
                                            <p className="mb-2">“The mobile app is so easy to use and secure. I love the instant alerts!”</p>
                                            <footer className="blockquote-footer text-white">Samuel oyebode, <cite title="Customer">Customer</cite></footer>
                                        </blockquote>
                                    </div>
                                    <div className="carousel-item">
                                        <blockquote className="blockquote text-center">
                                            <p className="mb-2">“Opening an account was fast and simple. Highly recommend PrivoBank!”</p>
                                            <footer className="blockquote-footer text-white">famous, <cite title="Customer">Customer</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#ctaCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#ctaCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Blog or Resources */}
            <div className="container-fluid my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <h2 className="fw-bold text-center mb-4">Latest Blog & Resources</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphoto%2Fbusiness-people-working-and-banking-109673900.html&psig=AOvVaw0bvsveGA3w9Hk6rdH8ah49&ust=1753617539296000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCq9ce82o4DFQAAAAAdAAAAABAE" className="card-img-top" alt="5 Tips for Secure Online Banking" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">5 Tips for Secure Online Banking</h5>
                                        <p className="card-text">Learn how to keep your online banking experience safe and secure with these essential tips.</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="How to Grow Your Business with PrivoBank" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">How to Grow Your Business with PrivoBank</h5>
                                        <p className="card-text">Discover the tools and services PrivoBank offers to help your business thrive in a digital world.</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Customer Success Stories" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Customer Success Stories</h5>
                                        <p className="card-text">Read inspiring stories from real customers who achieved their goals with PrivoBank.</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Understanding Digital Wallets" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Understanding Digital Wallets</h5>
                                        <p className="card-text">A beginner’s guide to digital wallets and how they can simplify your financial life.</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Why Choose PrivoBank?" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Why Choose PrivoBank?</h5>
                                        <p className="card-text">Explore the unique benefits and features that set PrivoBank apart from other banks.</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Guide to Saving for the Future" style={{ height: '180px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Guide to Saving for the Future</h5>
                                        <p className="card-text">Practical strategies and expert advice to help you build a secure financial future for yourself and your family.</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
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

export default Hero
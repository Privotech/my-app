import React from 'react'
import laga from '../laga.png';

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
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <h1 className="display-4 fw-bold">Welcome to PrivoBank</h1>
                            <p className="lead">Your trusted partner in financial services</p>
                            <button className="btn btn-primary btn-lg">Get Started</button>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
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
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="card shadow border-0" style={{ backgroundImage: '' }}>
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
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <h1 className="card-title mb-3 text-success fw-bold text-center">Our Team</h1>
                                <div className="row gy-4">
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Privilege+Oyegbile&background=0D8ABC&color=fff&size=128" alt="Privilege Oyegbile" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Privilege Oyegbile</h5>
                                        <p className="text-muted mb-0">Founder & CEO</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=6c757d&color=fff&size=128" alt="Jane Doe" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Jane Doe</h5>
                                        <p className="text-muted mb-0">Chief Operations Officer</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=John+Smith&background=343a40&color=fff&size=128" alt="John Smith" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">John Smith</h5>
                                        <p className="text-muted mb-0">Chief Technology Officer</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Emily+Wong&background=28a745&color=fff&size=128" alt="Emily Wong" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Emily Wong</h5>
                                        <p className="text-muted mb-0">Head of Customer Success</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Samuel+Adeyemi&background=ffc107&color=343a40&size=128" alt="Samuel Adeyemi" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Samuel Adeyemi</h5>
                                        <p className="text-muted mb-0">Finance Manager</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Fatima+Okafor&background=fd7e14&color=fff&size=128" alt="Fatima Okafor" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Fatima Okafor</h5>
                                        <p className="text-muted mb-0">Legal Advisor</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Michael+Brown&background=6610f2&color=fff&size=128" alt="Michael Brown" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Michael Brown</h5>
                                        <p className="text-muted mb-0">Marketing Lead</p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
                                        <img src="https://ui-avatars.com/api/?name=Linda+Chukwu&background=20c997&color=fff&size=128" alt="Linda Chukwu" className="rounded-circle mb-2" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
                                        <h5 className="fw-bold mb-1">Linda Chukwu</h5>
                                        <p className="text-muted mb-0">Product Manager</p>
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
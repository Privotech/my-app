import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const handleSideToggle = () => setSideOpen((prev) => !prev);
    const handleCloseSide = () => setSideOpen(false);
    const [feedback, setFeedback] = useState('');
    const [contact, setContact] = useState({ name: '', email: '', message: '' });
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        alert('Feedback sent!');
        setFeedback('');
    };
    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({ ...prev, [name]: value }));
    };
    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Contact request sent!');
        setContact({ name: '', email: '', message: '' });
    };
    return (
        <div className="d-flex min-vh-100 bg-light position-relative">
            {/* Sidebar */}
            <aside
                className={`bg-white shadow-sm d-flex flex-column p-4${sideOpen ? ' open' : ''}`}
                style={{ width: 220, zIndex: 1000, position: 'fixed', top: 0, left: sideOpen ? 0 : '-220px', height: '100%', transition: 'left 0.3s' }}
            >
                <button className="btn btn-link align-self-end mb-2 d-block d-lg-none" onClick={handleCloseSide} aria-label="Close sidebar">&times;</button>
                <h2 className="mb-4" style={{ color: '#2280e0', fontWeight: 700, fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav className="flex-grow-1">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/dashboard" className="nav-link fw-bold text-primary" onClick={handleCloseSide}>Dashboard</Link></li>
                        <li className="nav-item mb-2"><Link to="/Account" className="nav-link text-dark" onClick={handleCloseSide}>Accounts</Link></li>
                        <li className="nav-item mb-2"><Link to="/transfers" className="nav-link text-dark" onClick={handleCloseSide}>Transfers</Link></li>
                        <li className="nav-item mb-2"><Link to="/Analysis" className="nav-link text-dark" onClick={handleCloseSide}>Analysis</Link></li>
                        <li className="nav-item mb-2"><Link to="/cards" className="nav-link text-dark" onClick={handleCloseSide}>Cards</Link></li>
                        <li className="nav-item mb-2"><Link to="/Deposit" className="nav-link text-dark" onClick={handleCloseSide}>Deposit</Link></li>
                        <li className="nav-item mb-2"><Link to="/support" className="nav-link text-dark active" onClick={handleCloseSide}>Support</Link></li>
                    </ul>
                </nav>
                <Link to="/login" className="nav-link text-secondary mt-auto" onClick={handleCloseSide}>Logout</Link>
            </aside>
            {/* Overlay for all screens */}
            {sideOpen && <div className="position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(34,128,224,0.07)', zIndex: 999 }} onClick={handleCloseSide}></div>}

            <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: 0 }}>
                {/* Top Navbar with toggle */}
                <nav className="bg-white shadow-sm d-flex align-items-center justify-content-between px-4" style={{ height: 70 }}>
                    <button className="btn btn-link me-2 d-block" onClick={handleSideToggle} aria-label="Toggle sidebar">&#9776;</button>
                    <span className="fw-bold text-primary" style={{ fontSize: '1.3rem' }}>Support</span>
                </nav>
                {/* Main Content */}
                <div className="container my-5">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-primary fw-bold mb-3">Send Feedback</h3>
                                    <form onSubmit={handleFeedbackSubmit}>
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                placeholder="Your feedback..."
                                                value={feedback}
                                                onChange={e => setFeedback(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 fw-bold">Send Feedback</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-primary fw-bold mb-3">Contact Us</h3>
                                    <form onSubmit={handleContactSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={contact.name}
                                                onChange={handleContactChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={contact.email}
                                                onChange={handleContactChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Message</label>
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows={5}
                                                value={contact.message}
                                                onChange={handleContactChange}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 fw-bold">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
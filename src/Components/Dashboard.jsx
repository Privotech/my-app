import React, { useEffect, useRef } from 'react';

const colors = [
    '#e3f2fd', '#fce4ec', '#fffde7', '#e8f5e9', '#f3e5f5', '#fff', '#e0f7fa', '#f9fbe7'
];

const Dashboard = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => {
            if (bgRef.current) {
                bgRef.current.style.background = `linear-gradient(135deg, ${colors[idx % colors.length]} 0%, ${colors[(idx + 1) % colors.length]} 100%)`;
                idx++;
            }
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={bgRef} style={{ minHeight: '100vh', transition: 'background 1s' }}>
            {/* Top Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4" style={{ minHeight: 70 }}>
                <a className="navbar-brand fw-bold text-primary fs-2" href="#">PrivoBank</a>
                <div className="d-flex align-items-center ms-auto">
                    <button className="btn btn-link position-relative me-3">
                        <svg width="28" height="28" fill="#2280e0" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.7 1.7A1 1 0 005 19h14a1 1 0 00.7-1.7L18 16z" /></svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                    </button>
                    <img src="https://ui-avatars.com/api/?name=Privilege+Oyegbile&background=2280e0&color=fff&size=64" alt="User" className="rounded-circle" style={{ width: 48, height: 48 }} />
                </div>
            </nav>
            {/* Sidebar Navigation */}
            <div className="d-flex" style={{ minHeight: 'calc(100vh - 70px)' }}>
                <aside className="bg-white shadow-sm p-4 d-none d-lg-flex flex-column" style={{ width: 220 }}>
                    <a href="#" className="fw-bold text-primary mb-4 fs-4">Dashboard</a>
                    <a href="#" className="mb-3 fs-5 text-dark">Accounts</a>
                    <a href="#" className="mb-3 fs-5 text-dark">Transfers</a>
                    <a href="#" className="mb-3 fs-5 text-dark">Bills</a>
                    <a href="#" className="mb-3 fs-5 text-dark">Cards</a>
                    <a href="#" className="mb-3 fs-5 text-dark">Support</a>
                    <a href="#" className="mt-auto fs-6 text-muted">Logout</a>
                </aside>
                {/* Main Content */}
                <main className="flex-grow-1">
                    <div className="container py-5">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <h1 className="fw-bold text-primary display-3 mb-3">Hello, Privilege Oyegbile 👋</h1>
                                <p className="lead fs-3">Welcome back to PrivoBank. Here’s a summary of your accounts and recent activity.</p>
                            </div>
                        </div>
                        <div className="row g-5 mb-5">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card shadow-lg border-0" style={{ minHeight: 220 }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-success fs-4">Savings Account</h5>
                                        <p className="mb-1 fs-5">Account No: <strong>1234567890</strong></p>
                                        <h2 className="fw-bold text-primary">₦1,250,000.00</h2>
                                        <p className="text-muted fs-6">Available Balance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card shadow-lg border-0" style={{ minHeight: 220 }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-info fs-4">Current Account</h5>
                                        <p className="mb-1 fs-5">Account No: <strong>9876543210</strong></p>
                                        <h2 className="fw-bold text-info">₦520,000.00</h2>
                                        <p className="text-muted fs-6">Available Balance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card shadow-lg border-0 h-100" style={{ minHeight: 220 }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title text-warning fs-4">Quick Transfer</h5>
                                        <input type="text" className="form-control mb-3 fs-5" placeholder="Recipient Account No" style={{ maxWidth: 260 }} />
                                        <input type="number" className="form-control mb-3 fs-5" placeholder="Amount" style={{ maxWidth: 260 }} />
                                        <button className="btn btn-warning w-100 fs-5" style={{ maxWidth: 260 }}>Send Money</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mb-5">
                            <div className="col-12 col-lg-8">
                                <div className="card shadow-lg border-0" style={{ minHeight: 220 }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-secondary fs-4">Recent Activity</h5>
                                        <ul className="list-group list-group-flush fs-5">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>ATM Withdrawal</span>
                                                <span className="text-danger">-₦20,000.00</span>
                                                <span className="badge bg-danger">Debited</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Salary Credit</span>
                                                <span className="text-success">+₦350,000.00</span>
                                                <span className="badge bg-success">Credited</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>Electricity Bill Payment</span>
                                                <span className="text-warning">-₦15,000.00</span>
                                                <span className="badge bg-warning text-dark">Pending</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card shadow-lg border-0 h-100" style={{ minHeight: 220 }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title text-info fs-4">Quick Links</h5>
                                        <a href="#" className="btn btn-outline-primary w-100 mb-3 fs-5">Pay Bills</a>
                                        <a href="#" className="btn btn-outline-success w-100 mb-3 fs-5">View Statements</a>
                                        <a href="#" className="btn btn-outline-secondary w-100 fs-5">Account Settings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="card shadow-lg border-0" style={{ minHeight: 180 }}>
                                    <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title text-primary fs-3">Need Help?</h5>
                                        <p className="mb-3 fs-5">Contact our support team for assistance with your account or banking services.</p>
                                        <a href="#" className="btn btn-primary btn-lg px-5 fs-5">Contact Support</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* Footer */}
            <footer className="bg-white text-center py-4 shadow-sm mt-auto">
                <div className="container">
                    <span className="text-muted">&copy; {new Date().getFullYear()} PrivoBank. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
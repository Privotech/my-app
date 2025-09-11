import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.responsive.css';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/theme.css';

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const Dashboard = () => {
    const [showBalance, setShowBalance] = React.useState(true);
    // Load main balance from localStorage
    const [mainBalance, setMainBalance] = React.useState(() => {
        const saved = localStorage.getItem('mainBalance');
        return saved ? Number(saved) : 12500;
    });
    React.useEffect(() => {
        const interval = setInterval(() => {
            const saved = localStorage.getItem('mainBalance');
            setMainBalance(saved ? Number(saved) : 12500);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const [profile, setProfile] = React.useState(() => {
        const saved = localStorage.getItem('profile');
        return saved ? JSON.parse(saved) : {
            fullName: 'Privilege Oyegbile',
            avatar: '',
        };
    });
    React.useEffect(() => {
        const handleStorage = () => {
            const saved = localStorage.getItem('profile');
            if (saved) setProfile(JSON.parse(saved));
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);
    const handleToggleBalance = () => setShowBalance((prev) => !prev);
    // Load recent transfers from localStorage
    const [recentTransfers, setRecentTransfers] = React.useState(() => {
        return JSON.parse(localStorage.getItem('recentTransfers') || '[]');
    });
    React.useEffect(() => {
        const interval = setInterval(() => {
            setRecentTransfers(JSON.parse(localStorage.getItem('recentTransfers') || '[]'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const [sideOpen, setSideOpen] = React.useState(false);
    const handleSideToggle = () => setSideOpen((prev) => !prev);
    const handleCloseSide = () => setSideOpen(false);
    return (
        <div className="d-flex min-vh-100 bg-light position-relative">
            {/* Side Navbar - collapsible on small screens */}
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
                        <li className="nav-item mb-2"><Link to="/support" className="nav-link text-dark" onClick={handleCloseSide}>Support</Link></li>
                    </ul>
                </nav>
                <Link to="/login" className="nav-link text-secondary mt-auto" onClick={handleCloseSide}>Logout</Link>
            </aside>
            {/* Overlay for all screens */}
            {sideOpen && <div className="position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(34,128,224,0.07)', zIndex: 999 }} onClick={handleCloseSide}></div>}

            <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: 0 }}>
                {/* Upper Navbar with toggle */}
                <nav className="bg-white shadow-sm d-flex align-items-center justify-content-between px-4" style={{ height: 70 }}>
                    <button className="btn btn-link me-2 d-block" onClick={handleSideToggle} aria-label="Toggle sidebar">&#9776;</button>
                    <div className="d-flex align-items-center">
                        {profile.avatar ? (
                            <img src={profile.avatar} alt={profile.fullName} className="rounded-circle me-3" style={{ width: 48, height: 48 }} />
                        ) : (
                            <div className="rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, background: '#2280e0', color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>
                                {getInitials(profile.fullName || 'P')}
                            </div>
                        )}
                        <span className="fw-bold text-primary" style={{ fontSize: '1.1rem' }}>Welcome, {profile.fullName || 'Your Name'}</span>
                    </div>
                    <div>
                        <button className="btn btn-link position-relative me-3">
                            <svg width="28" height="28" fill="#2280e0" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.7 1.7A1 1 0 005 19h14a1 1 0 00.7-1.7L18 16z" /></svg>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                        </button>
                        <Link to="/settings" className="btn btn-primary rounded-3 fw-bold">Settings</Link>
                    </div>
                </nav>

                <div className="container py-4 flex-grow-1">
                    {/* Summary Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h3 className="text-primary fw-bold mb-2">Total Balance</h3>
                                    <div className="d-flex align-items-center gap-3">
                                        <p className="fs-3 fw-bold mb-0">
                                            {showBalance ? `₦${mainBalance.toLocaleString()}.00` : '••••••••••'}
                                        </p>
                                        <button onClick={handleToggleBalance} className="btn btn-link p-0" aria-label={showBalance ? 'Hide balance' : 'Show balance'}>
                                            {showBalance ? (
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2280e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></svg>
                                            ) : (
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2280e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.07 21.07 0 0 1 5.06-7.06" /><path d="M1 1l22 22" /><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h3 className="text-primary fw-bold mb-2">Recent Transactions<Link to="/transactions" className="ms-2">→</Link></h3>
                                    <p className="fs-3 fw-bold mb-0">{recentTransfers.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h3 className="text-primary fw-bold mb-2">Active Cards</h3>
                                    <p className="fs-3 fw-bold mb-0">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo Section */}
                    <div className="d-flex justify-content-center gap-5 mb-4">
                        {/* PrivoBank Logo */}
                        <div className="d-flex flex-column align-items-center">
                            <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mb-2" style={{ width: 30, height: 30 }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M12 2L2 7v2c0 5.25 3.75 10.25 10 13 6.25-2.75 10-7.75 10-13V7l-10-5z" /></svg>
                            </div>
                            <span className="fw-bold text-primary" style={{ fontSize: 10 }}>Transfer to PrivoBank</span>
                        </div>
                        {/* Other Bank Logo */}
                        <div className="d-flex flex-column align-items-center">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: 30, height: 30, background: '#6dd5ed' }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm0 2H7v14h10V5z" /></svg>
                            </div>
                            <span className="fw-bold text-primary" style={{ fontSize: 10 }}>Transfer to Other Bank</span>
                        </div>
                        {/* Withdraw Logo */}
                        <div className="d-flex flex-column align-items-center">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: 30, height: 30, background: '#e74c3c' }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M12 21v-6m0 0l-3 3m3-3l3 3M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0z" /></svg>
                            </div>
                            <span className="fw-bold text-primary" style={{ fontSize: 10 }}>Withdraw</span>
                        </div>
                    </div>
                    {/* Promotional Banner */}
                    <div className="card shadow-sm mb-4 text-white d-flex flex-row align-items-center justify-content-between" style={{ background: 'linear-gradient(90deg,#2280e0 60%,#6dd5ed 100%)', borderRadius: 12, padding: '1.5rem 2rem' }}>
                        <div>
                            <h2 className="fw-bold mb-1" style={{ fontSize: '1.3rem' }}>Refer & Earn</h2>
                            <p className="mb-0" style={{ fontSize: '1rem' }}>Invite friends and earn rewards for every successful referral!</p>
                        </div>
                        <button className="btn btn-light fw-bold" style={{ color: '#2280e0', borderRadius: 8 }}>Refer Now</button>
                    </div>

                    {/* Recent Transactions Table */}
                    <div className="card shadow-sm mb-4" style={{ borderRadius: 12 }}>
                        <div className="card-body">
                            <h2 className="text-primary fw-bold mb-3" style={{ fontSize: '1.3rem' }}>Recent Transactions</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentTransfers.length > 0 ? (
                                            recentTransfers.map((tx, idx) => (
                                                <tr key={idx}>
                                                    <td>{tx.date}</td>
                                                    <td>{tx.description}</td>
                                                    <td>{tx.amount}</td>
                                                    <td className="fw-bold text-success">{tx.status}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr><td colSpan={4} className="text-center text-secondary">No recent transfers</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Spending Chart Placeholder */}
                    <div className="card shadow-sm mb-4" style={{ borderRadius: 12 }}>
                        <div className="card-body">
                            <h2 className="text-primary fw-bold mb-3" style={{ fontSize: '1.3rem' }}>Spending Overview</h2>
                            <div className="d-flex align-items-center justify-content-center bg-light rounded" style={{ width: '100%', height: 180, color: '#888', fontSize: '1.1rem' }}>
                                {/* Replace with chart library for real data */}
                                <span>Chart coming soon...</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-4">
                            <Link to="/transfers" className="btn btn-primary w-100 fw-bold py-3">Send Money</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/Bills" className="btn btn-primary w-100 fw-bold py-3">Pay Bills</Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/Cards" className="btn btn-primary w-100 fw-bold py-3">View Cards</Link>
                        </div>
                    </div>
                    {/* Notifications Panel */}
                    <div className="card shadow-sm mt-4" style={{ borderRadius: 12 }}>
                        <div className="card-body">
                            <h2 className="text-primary fw-bold mb-3" style={{ fontSize: '1.3rem' }}>Notifications</h2>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 text-dark"><strong className="text-primary">New:</strong> Your electricity bill payment is pending.</li>
                                <li className="mb-2 text-dark"><strong className="text-primary">Info:</strong> Your card ending 1234 was used for a transaction.</li>
                                <li className="mb-2 text-dark"><strong className="text-primary">Success:</strong> Salary credited to your account.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


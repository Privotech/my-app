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
        <div className="dashboard-bg" style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
            {/* Side Navbar */}
            <aside className={`dashboard-side${sideOpen ? ' open' : ''}`} style={{ width: 220, boxShadow: '2px 0 8px rgba(34,128,224,0.07)', display: 'flex', flexDirection: 'column', padding: '2rem 1rem', background: '#fff', zIndex: 1000 }}>
                {/* Only show close button on small screens */}
                <button className="only-mobile" style={{ background: 'none', border: 'none', fontSize: 28, color: '#2280e0', alignSelf: 'flex-end', marginBottom: 10 }} onClick={handleCloseSide} aria-label="Close sidebar">&times;</button>
                <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '2rem', fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav style={{ flexGrow: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/dashboard" className="dashboard-link" style={{ fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Dashboard</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/Account" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Accounts</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/transfers" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Transfers</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/bills" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Analytics</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/cards" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Cards</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/support" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Support</Link></li>
                    </ul>
                </nav>
                <Link to="/login" style={{ color: '#888', marginTop: 'auto', textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Logout</Link>
            </aside>
            {/* Overlay for mobile */}
            {sideOpen && <div className="only-mobile" style={{ position: 'static', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(34,128,224,0.07)', zIndex: 999 }} onClick={handleCloseSide}></div>}

            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
                {/* Upper Navbar */}
                <nav className="dashboard-navbar" style={{ height: 70, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
                    {/* Hamburger Toggle - only visible on small screens, inside upper navbar */}
                    <button className="side-toggle-btn only-mobile" onClick={handleSideToggle} aria-label="Toggle sidebar" style={{ marginRight: 16 }}>
                        &#9776;
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {profile.avatar ? (
                            <img src={profile.avatar} alt={profile.fullName} style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 16 }} />
                        ) : (
                            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#2280e0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, marginRight: 16 }}>
                                {getInitials(profile.fullName || 'P')}
                            </div>
                        )}
                        <span style={{ fontWeight: 600, color: '#2280e0', fontSize: '1.1rem' }}>Welcome, {profile.fullName || 'Your Name'}</span>
                    </div>
                    <div>
                        <button style={{ background: 'none', border: 'none', position: 'relative', marginRight: 24 }}>
                            <svg width="28" height="28" fill="#2280e0" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.7 1.7A1 1 0 005 19h14a1 1 0 00.7-1.7L18 16z" /></svg>
                            <span style={{ position: 'absolute', top: -4, right: -8, background: '#e74c3c', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: 12 }}>2</span>
                        </button>
                        <Link to="/settings" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Settings</Link>
                    </div>
                </nav>

                <div style={{ flexGrow: 1, padding: '2rem' }}>
                    {/* Summary Cards */}
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
                        <div className="dashboard-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', padding: '1.5rem 2rem', flex: 1, position: 'relative' }}>
                            <h3 style={{ color: '#2280e0', fontWeight: 600, marginBottom: 8 }}>Total Balance</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <p style={{ fontSize: '1.7rem', fontWeight: 700, margin: 0 }}>
                                    {showBalance ? `₦${mainBalance.toLocaleString()}.00` : '••••••••••'}
                                </p>
                                <button onClick={handleToggleBalance} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label={showBalance ? 'Hide balance' : 'Show balance'}>
                                    {showBalance ? (
                                        // Eye icon
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2280e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></svg>
                                    ) : (
                                        // Eye-off icon
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2280e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.07 21.07 0 0 1 5.06-7.06" /><path d="M1 1l22 22" /><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="dashboard-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', padding: '1.5rem 2rem', flex: 1 }}>
                            <h3 style={{ color: '#2280e0', fontWeight: 600, marginBottom: 8, textDecoration: 'none' }}>Recent Transactions<Link to="/transactions" style={{ textDecoration: 'none' }}>→</Link></h3>
                            <p style={{ fontSize: '1.7rem', fontWeight: 700, margin: 0 }}>{recentTransfers.length}</p>
                        </div>
                        <div className="dashboard-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', padding: '1.5rem 2rem', flex: 1 }}>
                            <h3 style={{ color: '#2280e0', fontWeight: 600, marginBottom: 8 }}>Active Cards</h3>
                            <p style={{ fontSize: '1.7rem', fontWeight: 700, margin: 0 }}>2</p>
                        </div>
                    </div>
                    {/* Logo Section */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30.5rem', marginBottom: '2.5rem' }}>
                        {/* PrivoBank Logo */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#2280e0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M12 2L2 7v2c0 5.25 3.75 10.25 10 13 6.25-2.75 10-7.75 10-13V7l-10-5z" /></svg>
                            </div>
                            <span style={{ fontWeight: 800, color: '#2280e0', fontSize: 10 }}>Transfer to PrivoBank</span>
                        </div>
                        {/* Other Bank Logo */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#6dd5ed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm0 2H7v14h10V5z" /></svg>
                            </div>
                            <span style={{ fontWeight: 800, color: '#2280e0', fontSize: 10 }}>Transfer to Other Bank</span>
                        </div>
                        {/* Withdraw Logo */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e74c3c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M12 21v-6m0 0l-3 3m3-3l3 3M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0z" /></svg>
                            </div>
                            <span style={{ fontWeight: 800, color: '#2280e0', fontSize: 10 }}>Withdraw</span>
                        </div>
                    </div>
                    {/* Promotional Banner */}
                    <div className="dashboard-card" style={{ background: 'linear-gradient(90deg,#2280e0 60%,#6dd5ed 100%)', color: '#fff', borderRadius: 12, padding: '1.5rem 2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <h2 style={{ margin: 0, fontWeight: 700, fontSize: '1.3rem' }}>Refer & Earn</h2>
                            <p style={{ margin: '0.5rem 0 0 0', fontSize: '1rem' }}>Invite friends and earn rewards for every successful referral!</p>
                        </div>
                        <button style={{ background: '#fff', color: '#2280e0', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1rem' }}>Refer Now</button>
                    </div>

                    {/* Recent Transactions Table */}
                    <div className="dashboard-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ color: '#2280e0', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1.2rem' }}>Recent Transactions</h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f5f8fd' }}>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Date</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Description</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Amount</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransfers.length > 0 ? (
                                    recentTransfers.map((tx, idx) => (
                                        <tr key={idx}>
                                            <td style={{ padding: '0.7rem' }}>{tx.date}</td>
                                            <td style={{ padding: '0.7rem' }}>{tx.description}</td>
                                            <td style={{ padding: '0.7rem' }}>{tx.amount}</td>
                                            <td style={{ padding: '0.7rem', color: '#27ae60', fontWeight: 600 }}>{tx.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan={4} style={{ textAlign: 'center', padding: '1rem', color: '#888' }}>No recent transfers</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Spending Chart Placeholder */}
                    <div className="dashboard-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', padding: '2rem', marginBottom: '2rem' }}>
                        <h2 style={{ color: '#2280e0', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1.2rem' }}>Spending Overview</h2>
                        <div style={{ width: '100%', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f8fd', borderRadius: 8, color: '#888', fontSize: '1.1rem' }}>
                            {/* Replace with chart library for real data */}
                            <span>Chart coming soon...</span>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/transfers" className="dashboard-btn" style={{ borderRadius: 8, padding: '1rem 2rem', fontWeight: 600, fontSize: '1rem', flex: 1, textAlign: 'center', cursor: 'pointer' }}>Send Money</Link>
                        <Link to="/Bills" className="dashboard-btn" style={{ borderRadius: 8, padding: '1rem 2rem', fontWeight: 600, fontSize: '1rem', flex: 1, textDecoration: 'none', textAlign: 'center' }}>Pay Bills</Link>
                        <Link to="/Cards" className="dashboard-btn" style={{ borderRadius: 8, padding: '1rem 2rem', fontWeight: 600, fontSize: '1rem', flex: 1, textDecoration: 'none', textAlign: 'center' }}>View Cards</Link>
                    </div>
                    {/* Notifications Panel */}
                    <div className="dashboard-card" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', padding: '2rem', marginTop: '2rem' }}>
                        <h2 style={{ color: '#2280e0', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1.2rem' }}>Notifications</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '1rem', color: '#333' }}>
                                <strong style={{ color: '#2280e0' }}>New:</strong> Your electricity bill payment is pending.
                            </li>
                            <li style={{ marginBottom: '1rem', color: '#333' }}>
                                <strong style={{ color: '#2280e0' }}>Info:</strong> Your card ending 1234 was used for a transaction.
                            </li>
                            <li style={{ marginBottom: '1rem', color: '#333' }}>
                                <strong style={{ color: '#2280e0' }}>Success:</strong> Salary credited to your account.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const Transactionreceipt = () => {
    const [profile, setProfile] = useState(() => {
        const saved = localStorage.getItem('profile');
        return saved ? JSON.parse(saved) : { fullName: 'Privilege Oyegbile', avatar: '' };
    });
    useEffect(() => {
        const handleStorage = () => {
            const saved = localStorage.getItem('profile');
            if (saved) setProfile(JSON.parse(saved));
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);
    const receipts = JSON.parse(localStorage.getItem('recentTransfers') || '[]');

    return (
        <div className="dashboard-bg" style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
            {/* Side Navbar */}
            <aside className="dashboard-side" style={{ width: 220, boxShadow: '2px 0 8px rgba(34,128,224,0.07)', display: 'flex', flexDirection: 'column', padding: '2rem 1rem', background: '#fff', zIndex: 1000 }}>
                <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '2rem', fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav style={{ flexGrow: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/dashboard" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Dashboard</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/Account" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Accounts</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/transfers" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Transfers</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/Analysis" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Analysis</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/cards" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Cards</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/Deposit" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Deposit</Link></li>
                        <li style={{ marginBottom: '1.0rem' }}><Link to="/support" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1rem' }}>Support</Link></li>
                    </ul>
                </nav>
                <Link to="/login" style={{ color: '#888', marginTop: 'auto', textDecoration: 'none', fontSize: '1rem' }}>Logout</Link>
            </aside>
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Upper Navbar */}
                <nav className="dashboard-navbar" style={{ height: 70, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
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
                {/* Transaction Receipts Table */}
                <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
                    <h1 style={{ color: '#2280e0', fontWeight: 700, fontSize: 32, marginBottom: 32 }}>All Transaction Receipts</h1>
                    {receipts.length === 0 ? (
                        <div style={{ color: '#888', fontSize: 18 }}>No transaction receipts found.</div>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ background: '#f5f8fd' }}>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Date</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Description</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Amount</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Status</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Sender</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Receiver Bank</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Receiver Account</th>
                                    <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {receipts.map((tx, idx) => (
                                    <tr key={idx}>
                                        <td style={{ padding: '0.7rem' }}>{tx.date}</td>
                                        <td style={{ padding: '0.7rem' }}>{tx.description}</td>
                                        <td style={{ padding: '0.7rem' }}>{tx.amount}</td>
                                        <td style={{ padding: '0.7rem', color: '#27ae60', fontWeight: 600 }}>{tx.status}</td>
                                        <td style={{ padding: '0.7rem' }}>{tx.sender || '-'}</td>
                                        <td style={{ padding: '0.7rem' }}>{tx.receiverBank || '-'}</td>
                                        <td style={{ padding: '0.7rem' }}>{tx.receiverAccount || '-'}</td>
                                        <td style={{ padding: '0.7rem' }}>{tx.note || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Transactionreceipt;
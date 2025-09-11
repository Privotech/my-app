import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [message, setMessage] = useState('');
  const [mainBalance, setMainBalance] = useState(() => Number(localStorage.getItem('mainBalance')) || 12500);
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('profile');
    return saved ? JSON.parse(saved) : { fullName: 'Privilege Oyegbile', avatar: '' };
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const saved = localStorage.getItem('mainBalance');
      setMainBalance(saved ? Number(saved) : 12500);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('profile');
      if (saved) setProfile(JSON.parse(saved));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleDeposit = (e) => {
    e.preventDefault();
    const depositAmount = Number(amount);
    if (!bankName || !ownerName || isNaN(depositAmount) || depositAmount <= 0) {
      setMessage('Please fill all fields with valid values.');
      return;
    }
    // Update balance
    const currentBalance = Number(localStorage.getItem('mainBalance')) || 0;
    const newBalance = currentBalance + depositAmount;
    localStorage.setItem('mainBalance', newBalance);
    setMainBalance(newBalance);

    // Add receipt to recentTransfers
    const receipts = JSON.parse(localStorage.getItem('recentTransfers') || '[]');
    const now = new Date();
    const receipt = {
      date: now.toLocaleString(),
      description: 'Deposit',
      amount: `₦${depositAmount.toLocaleString()}`,
      status: 'Success',
      sender: ownerName,
      receiverBank: bankName,
      receiverAccount: '-',
      note: 'Deposit to account',
    };
    receipts.push(receipt);
    localStorage.setItem('recentTransfers', JSON.stringify(receipts));

    setMessage(`₦${depositAmount.toLocaleString()} deposited to ${ownerName} at ${bankName}. New balance: ₦${newBalance.toLocaleString()}`);
    setAmount('');
    setBankName('');
    setOwnerName('');
  };

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
        {/* Deposit Form */}
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', boxShadow: '0 2px 8px rgba(34,128,224,0.07)', borderRadius: 12, background: '#fff' }}>
          <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '1.5rem' }}>Deposit Funds</h2>
          <form onSubmit={handleDeposit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="bankName" style={{ fontWeight: 600, color: '#2280e0' }}>Bank Name:</label>
              <input
                id="bankName"
                type="text"
                value={bankName}
                onChange={e => setBankName(e.target.value)}
                style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #2280e0', marginTop: 8 }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="ownerName" style={{ fontWeight: 600, color: '#2280e0' }}>Account Owner Name:</label>
              <input
                id="ownerName"
                type="text"
                value={ownerName}
                onChange={e => setOwnerName(e.target.value)}
                style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #2280e0', marginTop: 8 }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="amount" style={{ fontWeight: 600, color: '#2280e0' }}>Amount (₦):</label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                style={{ width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #2280e0', marginTop: 8 }}
                min="1"
                required
              />
            </div>
            <button type="submit" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1rem', width: '100%' }}>Deposit</button>
          </form>
          {message && <div style={{ marginTop: '1.5rem', color: '#27ae60', fontWeight: 600 }}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
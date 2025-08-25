import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Transfer = () => {
  // Side navbar always visible, no toggle
  const [formData, setFormData] = useState({
    fromAccount: 'PrivoBank •••• 4567',
    toAccountType: 'GlobalTrust Bank',
    toAccount: '',
    amount: '',
    description: '',
    customBank: ''
  });

  // Load balance from localStorage or default
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem('mainBalance');
    return saved ? Number(saved) : 12500;
  });

  const isOtherBank = formData.toAccountType === 'Other';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Deduct amount from balance
    const transferAmount = Number(formData.amount);
    if (transferAmount > balance) {
      alert('Insufficient balance!');
      return;
    }
    const newBalance = balance - transferAmount;
    setBalance(newBalance);
    localStorage.setItem('mainBalance', newBalance);

    // Build receipt object
    const receipt = {
      date: new Date().toISOString().slice(0, 10),
      description: `Transfer to ${formData.toAccount}`,
      amount: `- ₦${transferAmount.toLocaleString()}.00`,
      status: 'Completed',
      sender: formData.fromAccount,
      receiverBank: formData.toAccountType === 'Other' ? formData.customBank : formData.toAccountType,
      receiverAccount: formData.toAccount,
      note: formData.description
    };
    // Get existing receipts from localStorage
    const receipts = JSON.parse(localStorage.getItem('recentTransfers') || '[]');
    // Add new receipt to front
    receipts.unshift(receipt);
    // Limit to 5 receipts
    localStorage.setItem('recentTransfers', JSON.stringify(receipts.slice(0, 5)));
    alert('Transfer request submitted!');
  };

  return (
    <div className="dashboard-bg" style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      {/* Side Navbar - always visible, static */}
      <aside className="dashboard-side" style={{ width: 220, boxShadow: '2px 0 8px rgba(34,128,224,0.07)', display: 'flex', flexDirection: 'column', padding: '2rem 1rem', position: 'static', top: 0, left: 0, height: '100vh', background: '#fff', zIndex: 1000 }}>
        <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '2rem', fontSize: '1.5rem' }}>PrivoBank</h2>
        <nav style={{ flexGrow: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}><Link to="/dashboard" className="dashboard-link" style={{ fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Dashboard</Link></li>
            <li style={{ marginBottom: '1.5rem' }}><Link to="/Account" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }}>Accounts</Link></li>
            <li style={{ marginBottom: '1.5rem' }}><Link to="/transfers" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }}>Transfers</Link></li>
            <li style={{ marginBottom: '1.5rem' }}><Link to="/bills" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }}>Bills</Link></li>
            <li style={{ marginBottom: '1.5rem' }}><Link to="/cards" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }}>Cards</Link></li>
            <li style={{ marginBottom: '1.5rem' }}><Link to="/support" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }}>Support</Link></li>
          </ul>
        </nav>
        <Link to="/login" style={{ color: '#888', marginTop: 'auto', textDecoration: 'none', fontSize: '1rem' }}>Logout</Link>
      </aside>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
        {/* Upper Navbar */}
        <nav className="dashboard-navbar" style={{ height: 70, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#2280e0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, marginRight: 16 }}>
              T
            </div>
            <span style={{ fontWeight: 600, color: '#2280e0', fontSize: '1.1rem' }}>Transfer Money</span>
          </div>
          <div>
            <Link to="/settings" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Settings</Link>
          </div>
        </nav>

        {/* Main Content: Transfer Form */}
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: 480, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: '2.5rem 2rem' }}>
            <h2 style={{ textAlign: 'center', margin: 0, color: '#2280e0', fontWeight: 700, fontSize: 28 }}>Transfer Money</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>From Account</label>
                <input
                  type="text"
                  name="fromAccount"
                  value={formData.fromAccount}
                  disabled
                  style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%', background: '#f1f5f9' }}
                />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>To Bank</label>
                <select
                  name="toAccountType"
                  value={formData.toAccountType}
                  onChange={e => {
                    handleChange(e);
                    if (e.target.value !== 'Other') {
                      setFormData(prev => ({ ...prev, customBank: '' }));
                    }
                  }}
                  style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                >
                  <option value="GlobalTrust Bank">GlobalTrust Bank</option>
                  <option value="PrivoBank">PrivoBank</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {formData.toAccountType === 'Other' && (
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Enter Bank Name</label>
                  <input
                    type="text"
                    name="customBank"
                    value={formData.customBank}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                  />
                </div>
              )}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>To Account Number</label>
                <input
                  type="text"
                  name="toAccount"
                  value={formData.toAccount}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="1"
                  style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Description (optional)</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                />
              </div>
              <button type="submit" style={{ width: '100%', background: '#2280e0', color: '#fff', fontWeight: 700, border: 'none', borderRadius: 8, padding: '0.9rem', fontSize: 18, marginTop: 8 }}>Submit Transfer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;


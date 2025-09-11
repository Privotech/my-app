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

  const [sideOpen, setSideOpen] = useState(false);
  const handleSideToggle = () => setSideOpen((prev) => !prev);
  const handleCloseSide = () => setSideOpen(false);
  return (
    <div className="d-flex min-vh-100 bg-light position-relative">
      {/* Side Navbar - collapsible on all screens */}
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
            <li className="nav-item mb-2"><Link to="/bills" className="nav-link text-dark" onClick={handleCloseSide}>Bills</Link></li>
            <li className="nav-item mb-2"><Link to="/cards" className="nav-link text-dark" onClick={handleCloseSide}>Cards</Link></li>
            <li className="nav-item mb-2"><Link to="/support" className="nav-link text-dark" onClick={handleCloseSide}>Support</Link></li>
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
          <span className="fw-bold text-primary" style={{ fontSize: '1.3rem' }}>Transfer Money</span>
          <Link to="/settings" className="btn btn-primary">Settings</Link>
        </nav>

        {/* Main Content: Transfer Form */}
        <div className="d-flex align-items-center justify-content-center flex-grow-1">
          <div className="card shadow-lg" style={{ maxWidth: 480, width: '100%' }}>
            <div className="card-body p-4">
              <h2 className="text-center text-primary fw-bold mb-4" style={{ fontSize: 28 }}>Transfer Money</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">From Account</label>
                  <input
                    type="text"
                    name="fromAccount"
                    value={formData.fromAccount}
                    disabled
                    className="form-control bg-light"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">To Bank</label>
                  <select
                    name="toAccountType"
                    value={formData.toAccountType}
                    onChange={e => {
                      handleChange(e);
                      if (e.target.value !== 'Other') {
                        setFormData(prev => ({ ...prev, customBank: '' }));
                      }
                    }}
                    className="form-select"
                  >
                    <option value="GlobalTrust Bank">GlobalTrust Bank</option>
                    <option value="PrivoBank">PrivoBank</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {formData.toAccountType === 'Other' && (
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Enter Bank Name</label>
                    <input
                      type="text"
                      name="customBank"
                      value={formData.customBank}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label fw-semibold">To Account Number</label>
                  <input
                    type="text"
                    name="toAccount"
                    value={formData.toAccount}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="1"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description (optional)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold mt-2" style={{ fontSize: 18 }}>Submit Transfer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;


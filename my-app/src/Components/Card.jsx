import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const handleSideToggle = () => setSideOpen((prev) => !prev);
    const handleCloseSide = () => setSideOpen(false);
    // Card data state
    const [cards, setCards] = useState([
        {
            id: 1,
            type: 'GlobalTrust Visa',
            name: 'Privilege oyegbile',
            number: '•••• •••• •••• 4567',
            expires: '08/26',
            status: 'Active',
            limit: '₦1,000,000.00',
            balance: '₦70,245.32',
            nextStatement: 'July 15, 2023'
        },
        {
            id: 2,
            type: 'GlobalTrust Mastercard',
            name: 'Privilege oyegbile',
            number: '•••• •••• •••• 8910',
            expires: '03/27',
            status: 'Active',
            limit: '₦800,000.00',
            balance: '₦30,842.76',
            nextStatement: 'July 18, 2023'
        }
    ]);

    // Transaction data
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            merchant: 'Amazon Purchase',
            date: 'Jun 12, 2025',
            amount: -8499.99,
            status: 'Pending'
        },
        {
            id: 2,
            merchant: 'Gas Station',
            date: 'Jun 10, 2023',
            amount: -4050.50,
            status: 'Completed'
        },
        {
            id: 3,
            merchant: 'Starbucks',
            date: 'Jun 8, 2023',
            amount: -6000.75,
            status: 'Completed'
        }
    ]);

    const handleRequestCard = () => {
        const name = prompt('Enter your name for the new card:');
        if (!name || !name.trim()) return;
        // Generate a new card object
        const newId = cards.length ? Math.max(...cards.map(c => c.id)) + 1 : 1;
        // Generate random balance > ₦50,000
        const balanceAmount = Math.floor(50001 + Math.random() * (999999 - 50001));
        // Generate random limit < ₦1,000,000 in hundreds
        const limitAmount = Math.floor(100 * (Math.random() * (10000 - 501) + 501));
        const newCard = {
            id: newId,
            type: 'GlobalTrust Visa',
            name,
            number: `•••• •••• •••• ${Math.floor(1000 + Math.random() * 9000)}`,
            expires: '12/28',
            status: 'Active',
            limit: `₦${limitAmount.toLocaleString()}.00`,
            balance: `₦${balanceAmount.toLocaleString()}.00`,
            nextStatement: 'Sep 15, 2025'
        };
        setCards([...cards, newCard]);
    };

    const handleCardAction = (action) => {
        alert(`${action} action triggered`);
    };

    // Dashboard profile state for navbar
    const [profile, setProfile] = useState(() => {
        const saved = localStorage.getItem('profile');
        return saved ? JSON.parse(saved) : {
            fullName: 'Privilege Oyegbile',
            avatar: '',
        };
    });
    const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
    // Track hovered card for delete button
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const handleRemoveCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };
    return (
        <div className="dashboard-bg" style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
            {/* Hamburger Toggle */}
            <button className="side-toggle-btn" style={{ position: 'fixed', top: 20, left: 20, zIndex: 1001, background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 0.7rem', fontSize: 24, display: 'none' }} onClick={handleSideToggle} aria-label="Toggle sidebar">
                &#9776;
            </button>
            {/* Side Navbar */}
            <aside className={`dashboard-side${sideOpen ? ' open' : ''}`} style={{ width: 220, boxShadow: '2px 0 8px rgba(34,128,224,0.07)', display: 'flex', flexDirection: 'column', padding: '2rem 1rem', position: 'fixed', top: 0, left: sideOpen ? 0 : -240, height: '100vh', background: '#fff', zIndex: 1000, transition: 'left 0.3s' }}>
                <button style={{ background: 'none', border: 'none', fontSize: 28, color: '#2280e0', alignSelf: 'flex-end', marginBottom: 10, display: sideOpen ? 'block' : 'none' }} onClick={handleCloseSide} aria-label="Close sidebar">&times;</button>
                <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '2rem', fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav style={{ flexGrow: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '1.5rem' }}><Link to="/dashboard" className="dashboard-link" style={{ fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }} onClick={handleCloseSide}>Dashboard</Link></li>
                        <li style={{ marginBottom: '1.5rem' }}><Link to="/Account" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }} onClick={handleCloseSide}>Accounts</Link></li>
                        <li style={{ marginBottom: '1.5rem' }}><Link to="/transfers" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }} onClick={handleCloseSide}>Transfers</Link></li>
                        <li style={{ marginBottom: '1.5rem' }}><Link to="/Analysis" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }} onClick={handleCloseSide}>Analysis</Link></li>
                        <li style={{ marginBottom: '1.5rem' }}><Link to="/cards" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }} onClick={handleCloseSide}>Cards</Link></li>
                        <li style={{ marginBottom: '1.5rem' }}><Link to="/support" className="dashboard-link" style={{ textDecoration: 'none', fontSize: '1.1rem' }} onClick={handleCloseSide}>Support</Link></li>
                    </ul>
                </nav>
                <Link to="/login" style={{ color: '#888', marginTop: 'auto', textDecoration: 'none', fontSize: '1rem' }} onClick={handleCloseSide}>Logout</Link>
            </aside>
            {/* Overlay for mobile */}
            {sideOpen && <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(34,128,224,0.07)', zIndex: 999 }} onClick={handleCloseSide}></div>}

            {/* Main Content with Upper Navbar */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginLeft: 220 }}>
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
                        <Link to="/Settings" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Settings</Link>
                    </div>
                </nav>
                {/* Card Content */}
                <div style={{ flexGrow: 1, background: '#f8fafc', padding: '2rem' }}>
                    <h1 style={{ color: '#2280e0', fontWeight: 700, fontSize: 32, marginBottom: 32 }}>My Cards</h1>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: 32 }}>
                        {cards.map(card => (
                            <div
                                key={card.id}
                                style={{ background: 'linear-gradient(90deg,#2280e0 60%,#6dd5ed 100%)', color: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(34,128,224,0.10)', padding: '2rem', minWidth: 320, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}
                                onMouseEnter={() => setHoveredCardId(card.id)}
                                onMouseLeave={() => setHoveredCardId(null)}
                            >
                                {/* Delete button, only visible on hover */}
                                {hoveredCardId === card.id && (
                                    <button
                                        onClick={() => handleRemoveCard(card.id)}
                                        style={{ position: 'absolute', top: 12, right: 12, background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, padding: '0.5rem 1rem', fontSize: 14, cursor: 'pointer', zIndex: 2, boxShadow: '0 2px 8px rgba(34,128,224,0.15)' }}
                                    >
                                        Delete
                                    </button>
                                )}
                                {/* ...existing card content... */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: 20, margin: 0 }}>{card.type}</p>
                                        <p style={{ fontWeight: 500, fontSize: 16, margin: '4px 0 0 0' }}>{card.name}</p>
                                    </div>
                                    <img src="https://placehold.co/100x60" alt="Card logo" style={{ borderRadius: 8 }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                                    <div>
                                        <p style={{ fontWeight: 500, margin: 0 }}>Card Number</p>
                                        <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>{card.number}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 500, margin: 0 }}>Expires</p>
                                        <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>{card.expires}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                                    <div>
                                        <span style={{ fontWeight: 500 }}>Status:</span> <span style={{ fontWeight: 700 }}>{card.status}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: 500 }}>Limit:</span> <span style={{ fontWeight: 700 }}>{card.limit}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: 500 }}>Balance:</span> <span style={{ fontWeight: 700 }}>{card.balance}</span>
                                    </div>
                                </div>
                                <div style={{ marginTop: 16 }}>
                                    <span style={{ fontWeight: 500 }}>Next Statement:</span> <span style={{ fontWeight: 700 }}>{card.nextStatement}</span>
                                </div>
                            </div>
                        ))}
                        <button onClick={handleRequestCard} style={{ background: '#fff', color: '#2280e0', border: '2px solid #2280e0', borderRadius: 18, fontWeight: 700, fontSize: 18, padding: '2rem', minWidth: 320, cursor: 'pointer', boxShadow: '0 4px 24px rgba(34,128,224,0.10)' }}>
                            + Request New Card
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: 32 }}>
                        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(34,128,224,0.10)', padding: '2rem', minWidth: 320, flex: 1 }}>
                            <h2 style={{ color: '#2280e0', fontWeight: 700, fontSize: 24, marginBottom: 16 }}>Card Details</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <div><label style={{ fontWeight: 500 }}>Card Status:</label> <span style={{ fontWeight: 700 }}>{cards[0].status}</span></div>
                                <div><label style={{ fontWeight: 500 }}>Card Limit:</label> <span style={{ fontWeight: 700 }}>{cards[0].limit}</span></div>
                                <div><label style={{ fontWeight: 500 }}>Available Balance:</label> <span style={{ fontWeight: 700 }}>{cards[0].balance}</span></div>
                                <div><label style={{ fontWeight: 500 }}>Next Statement Date:</label> <span style={{ fontWeight: 700 }}>{cards[0].nextStatement}</span></div>
                            </div>
                        </div>
                        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(34,128,224,0.10)', padding: '2rem', minWidth: 320, flex: 1 }}>
                            <h2 style={{ color: '#2280e0', fontWeight: 700, fontSize: 24, marginBottom: 16 }}>Quick Actions</h2>
                            <div style={{ display: 'flex', gap: 16 }}>
                                <button onClick={() => handleCardAction('Block Card')} style={{ background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, padding: '0.7rem 1.5rem', fontSize: 16, cursor: 'pointer' }}>Block Card</button>
                                <button onClick={() => handleCardAction('Reset PIN')} style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, padding: '0.7rem 1.5rem', fontSize: 16, cursor: 'pointer' }}>Reset PIN</button>
                                <Link to="/Settings" style={{ background: '#f1c40f', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, padding: '0.7rem 1.5rem', fontSize: 16, cursor: 'pointer', display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Settings</Link>
                                <button onClick={() => handleCardAction('Help')} style={{ background: '#6dd5ed', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, padding: '0.7rem 1.5rem', fontSize: 16, cursor: 'pointer' }}>Help</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(34,128,224,0.10)', padding: '2rem', marginBottom: 32 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                            <h2 style={{ color: '#2280e0', fontWeight: 700, fontSize: 24 }}>Recent Card Transactions</h2>
                            <button style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, padding: '0.7rem 1.5rem', fontSize: 16, cursor: 'pointer' }}>View All</button>
                        </div>
                        <div>
                            {transactions.map(transaction => (
                                <div key={transaction.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', borderRadius: 12, padding: '1rem 1.5rem', marginBottom: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                        <div style={{ fontSize: 24, color: transaction.amount > 0 ? '#27ae60' : '#e74c3c' }}>
                                            {transaction.amount > 0 ? '↑' : '↓'}
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600, margin: 0 }}>{transaction.merchant}</p>
                                            <p style={{ color: '#888', margin: 0 }}>{transaction.date}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontWeight: 700, margin: 0, color: transaction.amount > 0 ? '#27ae60' : '#e74c3c' }}>{transaction.amount > 0 ? '+' : ''}₦{Math.abs(transaction.amount).toFixed(2)}</p>
                                        <p style={{ color: transaction.status === 'Completed' ? '#27ae60' : transaction.status === 'Pending' ? '#e67e22' : '#e74c3c', fontWeight: 600, margin: 0 }}>{transaction.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

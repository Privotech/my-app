import React, { useEffect, useRef, useState } from 'react';
import Chart from '../chart';
import { Link } from 'react-router-dom';

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const Analysis = () => {
    const chartRef = useRef(null);
    const myChartRef = useRef(null);
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

    useEffect(() => {
        // Chart logic
        const transfers = JSON.parse(localStorage.getItem('recentTransfers') || '[]');
        const spendData = transfers
            .filter(tx => tx.amount && typeof tx.amount === 'string' && tx.amount.includes('-'))
            .map(tx => {
                const num = Number(tx.amount.replace(/[^\d.-]/g, ''));
                return {
                    date: tx.date || '',
                    amount: Math.abs(num)
                };
            });
        const grouped = {};
        spendData.forEach(({ date, amount }) => {
            if (!grouped[date]) grouped[date] = 0;
            grouped[date] += amount;
        });
        const labels = Object.keys(grouped);
        const data = Object.values(grouped);

        if (myChartRef.current) {
            myChartRef.current.destroy();
        }
        if (chartRef.current) {
            myChartRef.current = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Spending Over Time',
                            data,
                            fill: true,
                            backgroundColor: 'rgba(34,128,224,0.2)',
                            borderColor: '#2280e0',
                            tension: 0.3,
                            pointRadius: 4,
                            pointBackgroundColor: '#2280e0',
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: true },
                        title: {
                            display: true,
                            text: 'Spending Analysis',
                            font: { size: 20 },
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Amount (₦)' },
                        },
                        x: {
                            title: { display: true, text: 'Date' },
                        },
                    },
                },
            });
        }
    }, []);

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
                {/* Analysis Chart Section */}
                <div className="container my-5">
                    <h2 className="text-center mb-4 text-primary fw-bold">Spending Analysis</h2>
                    <div className="card shadow border-0 p-4">
                        <canvas ref={chartRef} style={{ width: '100%', maxWidth: '100%', height: 300, maxHeight: 1000 }}></canvas>
                    </div>
                    <p className="mt-3 text-center">The chart above shows your spending trend. The higher the chart, the more you spent on that day.</p>
                </div>
            </div>
        </div>
    );
}

export default Analysis;
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="d-flex min-vh-100 bg-light">
            {/* Side Navbar */}
            <aside className="bg-white shadow-sm d-flex flex-column p-4" style={{ width: 220 }}>
                <h2 className="mb-4" style={{ color: '#2280e0', fontWeight: 700, fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav className="flex-grow-1">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/dashboard" className="nav-link fw-bold text-primary">Dashboard</Link></li>
                        <li className="nav-item mb-2"><Link to="/Account" className="nav-link text-dark">Accounts</Link></li>
                        <li className="nav-item mb-2"><Link to="/transfers" className="nav-link text-dark">Transfers</Link></li>
                        <li className="nav-item mb-2"><Link to="/Analysis" className="nav-link text-dark">Analysis</Link></li>
                        <li className="nav-item mb-2"><Link to="/cards" className="nav-link text-dark">Cards</Link></li>
                        <li className="nav-item mb-2"><Link to="/Deposit" className="nav-link text-dark">Deposit</Link></li>
                        <li className="nav-item mb-2"><Link to="/support" className="nav-link text-dark">Support</Link></li>
                    </ul>
                </nav>
                <Link to="/login" className="nav-link text-secondary mt-auto">Logout</Link>
            </aside>
            <div className="flex-grow-1 d-flex flex-column">
                {/* Upper Navbar */}
                <nav className="bg-white shadow-sm d-flex align-items-center justify-content-between px-4" style={{ height: 70 }}>
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
                        <Link to="/settings" className="btn btn-primary rounded-3 fw-bold">Settings</Link>
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
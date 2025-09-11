import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const initialSettings = {
    theme: 'light',
    loginPassword: '',
    transferPassword: '',
    securityQuestion: '',
    securityAnswer: '',
    facialAuthEnabled: false,
    feedback: '',
    suggestions: '',
    savingsEnabled: false,
};

const Setting = () => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('settings');
        return saved ? JSON.parse(saved) : initialSettings;
    });
    const [closeAccount, setCloseAccount] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSave = (e, key) => {
        if (e) e.preventDefault();
        localStorage.setItem('settings', JSON.stringify(settings));
        if (key === 'theme') {
            document.body.setAttribute('data-theme', settings.theme);
        }
        alert(`${key ? key.charAt(0).toUpperCase() + key.slice(1) : 'Settings'} saved!`);
    };

    // Apply theme on mount
    useEffect(() => {
        const saved = localStorage.getItem('settings');
        if (saved) {
            const s = JSON.parse(saved);
            document.body.setAttribute('data-theme', s.theme || 'light');
        }
    }, []);

    // Facial authentication setup
    const videoRef = useRef(null);
    const [faceSetup, setFaceSetup] = useState(false);
    const [faceSaved, setFaceSaved] = useState(false);
    const handleFacialSetup = async () => {
        setFaceSetup(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
        } catch (err) {
            alert('Camera access denied or not available.');
            setFaceSetup(false);
        }
    };
    const handleSaveFace = () => {
        // For demo: just mark as saved
        setFaceSaved(true);
        alert('Facial profile saved!');
        // In real app, capture image and store securely
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
        setFaceSetup(false);
    };

    const handleCloseAccount = () => {
        setCloseAccount(true);
        // Add logic to close account here
        alert('Account closure request submitted.');
    };

    // Collapsible state for each section
    const [open, setOpen] = useState({
        theme: false,
        facial: false,
        login: false,
        transfer: false,
        security: false,
        savings: false,
        feedback: false,
        suggestions: false,
        close: false,
    });

    const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

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
                {/* Top Navbar with toggle */}
                <nav className="bg-white shadow-sm d-flex align-items-center justify-content-between px-4" style={{ height: 70 }}>
                    <button className="btn btn-link me-2 d-block" onClick={handleSideToggle} aria-label="Toggle sidebar">&#9776;</button>
                    <span className="fw-bold text-primary" style={{ fontSize: '1.3rem' }}>Settings</span>
                </nav>
                {/* Main Settings Card */}
                <div className="container my-5">
                    <div className="card shadow-lg mx-auto" style={{ maxWidth: 600 }}>
                        <div className="card-body p-4">
                            <form onSubmit={handleSave} className="d-flex flex-column gap-3">
                                {/* Theme */}
                                <div className="mb-3">
                                    <button type="button" className="btn btn-link w-100 d-flex justify-content-between align-items-center text-primary fw-bold" onClick={() => toggle('theme')}>
                                        <span>Theme</span>
                                        <span className={`transition ${open.theme ? 'rotate-90' : ''}`}>{'>'}</span>
                                    </button>
                                    {open.theme && (
                                        <div className="mt-2 border-bottom pb-3">
                                            <select name="theme" value={settings.theme} onChange={handleChange} className="form-select mb-2">
                                                <option value="light">Light</option>
                                                <option value="dark">Dark</option>
                                            </select>
                                            <button type="button" className="btn btn-primary" onClick={(e) => handleSave(e, 'theme')}>Save Theme</button>
                                        </div>
                                    )}
                                </div>
                                {/* Facial Authentication */}
                                <div className="mb-3">
                                    <button type="button" className="btn btn-link w-100 d-flex justify-content-between align-items-center text-primary fw-bold" onClick={() => toggle('facial')}>
                                        <span>Facial Authentication</span>
                                        <span className={`transition ${open.facial ? 'rotate-90' : ''}`}>{'>'}</span>
                                    </button>
                                    {open.facial && (
                                        <div className="mt-2 border-bottom pb-3">
                                            <div className="form-check mb-2">
                                                <input type="checkbox" className="form-check-input" id="facialAuthEnabled" name="facialAuthEnabled" checked={settings.facialAuthEnabled} onChange={handleChange} />
                                                <label className="form-check-label" htmlFor="facialAuthEnabled">Enable Facial Authentication</label>
                                            </div>
                                            {!faceSaved && !faceSetup && settings.facialAuthEnabled && (
                                                <button type="button" className="btn btn-primary mb-2" onClick={handleFacialSetup}>Setup Facial Profile</button>
                                            )}
                                            {faceSetup && (
                                                <div className="mt-2">
                                                    <video ref={videoRef} width={220} height={160} className="rounded border border-primary mb-2" />
                                                    <button type="button" className="btn btn-primary" onClick={handleSaveFace}>Save Face</button>
                                                </div>
                                            )}
                                            {faceSaved && <div className="text-primary mt-2">Facial profile saved!</div>}
                                            <button type="button" className="btn btn-primary mt-2" onClick={(e) => handleSave(e, 'facial authentication')}>Save Facial Auth</button>
                                        </div>
                                    )}
                                </div>
                                {/* Change Login Password */}
                                <div className="mb-3">
                                    <button type="button" className="btn btn-link w-100 d-flex justify-content-between align-items-center text-primary fw-bold" onClick={() => toggle('login')}>
                                        <span>Change Login Password</span>
                                        <span className={`transition ${open.login ? 'rotate-90' : ''}`}>{'>'}</span>
                                    </button>
                                    {open.login && (
                                        <div className="mt-2 border-bottom pb-3">
                                            <input type="password" name="loginPassword" value={settings.loginPassword} onChange={handleChange} className="form-control mb-2" />
                                            <button type="button" className="btn btn-primary" onClick={(e) => handleSave(e, 'login password')}>Save Login Password</button>
                                        </div>
                                    )}
                                </div>
                                {/* ...existing code... */}
                                <button type="submit" className="btn btn-primary mt-3 fw-bold">Save Settings</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const saveBtnStyle = {
    background: '#2280e0',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '0.5rem 1.2rem',
    fontWeight: 600,
    fontSize: '1rem',
    marginTop: 8,
    cursor: 'pointer',
};

const inputStyle = {
    padding: '0.7rem 1rem',
    borderRadius: 8,
    border: '1px solid #ddd',
    fontSize: '1rem',
    width: '100%',
};

const sectionBtnStyle = {
    width: '100%',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '0.7rem 0',
    cursor: 'pointer',
    color: '#2280e0',
};

const dropdownStyle = {
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
};

export default Setting;
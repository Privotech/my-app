import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(34,128,224,0.09)', padding: '2.5rem 2rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
            <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '2rem', fontSize: '2rem' }}><Link to="/dashboard" style={{ textDecoration: 'none', marginRight: '20px' }}>←</Link>     Settings</h2>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Theme */}
                <div>
                    <button type="button" onClick={() => toggle('theme')} style={sectionBtnStyle}>
                        <span>Theme</span>
                        <span style={{ transform: open.theme ? 'rotate(90deg)' : 'none', transition: '0.2s' }}>{'>'}</span>
                    </button>
                    {open.theme && (
                        <div style={dropdownStyle}>
                            <select name="theme" value={settings.theme} onChange={handleChange} style={inputStyle}>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                            <button type="button" onClick={(e) => handleSave(e, 'theme')} style={saveBtnStyle}>Save Theme</button>
                        </div>
                    )}
                </div>
                {/* Facial Authentication */}
                <div>
                    <button type="button" onClick={() => toggle('facial')} style={sectionBtnStyle}>
                        <span>Facial Authentication</span>
                        <span style={{ transform: open.facial ? 'rotate(90deg)' : 'none', transition: '0.2s' }}>{'>'}</span>
                    </button>
                    {open.facial && (
                        <div style={dropdownStyle}>
                            <label>
                                <input type="checkbox" name="facialAuthEnabled" checked={settings.facialAuthEnabled} onChange={handleChange} /> Enable Facial Authentication
                            </label>
                            {!faceSaved && !faceSetup && settings.facialAuthEnabled && (
                                <button type="button" onClick={handleFacialSetup} style={saveBtnStyle}>Setup Facial Profile</button>
                            )}
                            {faceSetup && (
                                <div style={{ marginTop: 12 }}>
                                    <video ref={videoRef} width={220} height={160} style={{ borderRadius: 8, border: '1px solid #2280e0' }} />
                                    <button type="button" onClick={handleSaveFace} style={saveBtnStyle}>Save Face</button>
                                </div>
                            )}
                            {faceSaved && <div style={{ color: '#2280e0', marginTop: 8 }}>Facial profile saved!</div>}
                            <button type="button" onClick={(e) => handleSave(e, 'facial authentication')} style={saveBtnStyle}>Save Facial Auth</button>
                        </div>
                    )}
                </div>
                {/* Change Login Password */}
                <div>
                    <button type="button" onClick={() => toggle('login')} style={sectionBtnStyle}>
                        <span>Change Login Password</span>
                        <span style={{ transform: open.login ? 'rotate(90deg)' : 'none', transition: '0.2s' }}>{'>'}</span>
                    </button>
                    {open.login && (
                        <div style={dropdownStyle}>
                            <input type="password" name="loginPassword" value={settings.loginPassword} onChange={handleChange} style={inputStyle} />
                            <button type="button" onClick={(e) => handleSave(e, 'login password')} style={saveBtnStyle}>Save Login Password</button>
                        </div>
                    )}
                </div>
                {/* Add other settings sections here (transfer, security, savings, feedback, suggestions, close account) */}
                {/* ...existing code... */}
                <button type="submit" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1rem', marginTop: 8 }}>Save Settings</button>
            </form>
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
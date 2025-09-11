import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const initialProfile = {
    fullName: 'Oyegbile Privilege',
    avatar: '', // leave empty for initials or add a URL
    occupation: 'Software Developer',
    gender: 'Male',
    dob: '1998-07-21',
    nationality: 'Nigerian',
    email: 'privilegeoyegbile@gmail.com',
    phone: '+234 904 405 8809',
    address: '12, Bank Street, Lagos',
};

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();



const Account = () => {
    const [profile, setProfile] = useState(() => {
        const saved = localStorage.getItem('profile');
        return saved ? JSON.parse(saved) : initialProfile;
    });
    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('profile', JSON.stringify(profile));
        setEditing(false);
    };

    const handleEdit = () => setEditing(true);


    const [sideOpen, setSideOpen] = useState(false);
    const handleSideToggle = () => setSideOpen((prev) => !prev);
    const handleCloseSide = () => setSideOpen(false);
    return (
        <div className="d-flex min-vh-100 bg-light position-relative">
            {/* Side Navbar - collapsible on small screens */}
            <aside
                className={`bg-white shadow-sm d-flex flex-column p-4${sideOpen ? ' open' : ''}`}
                style={{ width: 220, zIndex: 1000, position: 'fixed', top: 0, left: sideOpen ? 0 : '-220px', height: '100%', transition: 'left 0.3s' }}
            >
                <button className="d-lg-none btn btn-link align-self-end mb-2" onClick={handleCloseSide} aria-label="Close sidebar">&times;</button>
                <h2 className="mb-4" style={{ color: '#2280e0', fontWeight: 700, fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav className="flex-grow-1">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-3"><a href="/dashboard" className="nav-link fw-bold text-primary" onClick={handleCloseSide}>Dashboard</a></li>
                        <li className="nav-item mb-3"><a href="/Account" className="nav-link text-dark" onClick={handleCloseSide}>Accounts</a></li>
                        <li className="nav-item mb-3"><a href="/transfers" className="nav-link text-dark" onClick={handleCloseSide}>Transfers</a></li>
                        <li className="nav-item mb-3"><a href="/Analysis" className="nav-link text-dark" onClick={handleCloseSide}>Analysis</a></li>
                        <li className="nav-item mb-3"><a href="/cards" className="nav-link text-dark" onClick={handleCloseSide}>Cards</a></li>
                        <li className="nav-item mb-3"><a href="/support" className="nav-link text-dark" onClick={handleCloseSide}>Support</a></li>
                    </ul>
                </nav>
                <a href="/login" className="nav-link text-secondary mt-auto" onClick={handleCloseSide}>Logout</a>
            </aside>

            {/* Main Section with Top Navbar */}
            <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: 0 }}>
                {/* Top Navbar with toggle */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 d-flex align-items-center justify-content-between" style={{ height: 70 }}>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-primary d-lg-none me-3" onClick={handleSideToggle} aria-label="Open sidebar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span style={{ fontWeight: 600, color: '#2280e0', fontSize: '1.1rem' }}>Accounts</span>
                    </div>
                    <div>
                        {/* Add any right-side navbar content here */}
                    </div>
                </nav>
                {/* Top Navbar */}
                <nav className="bg-white shadow-sm d-flex align-items-center justify-content-between px-4" style={{ height: 70 }}>
                    <div className="d-flex align-items-center">
                        <img src={profile.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(profile.fullName || 'P') + "&background=2280e0&color=fff&size=64"} alt="User" className="rounded-circle me-3" style={{ width: 48, height: 48 }} />
                        <span className="fw-bold text-primary" style={{ fontSize: '1.1rem' }}>Welcome, {profile.fullName || 'Your Name'}</span>
                    </div>
                    <div>
                        <a href="/settings" className="btn btn-primary rounded-3 fw-bold">Settings</a>
                    </div>
                </nav>

                {/* Profile Card Section */}
                <div className="d-flex justify-content-center align-items-center flex-grow-1">
                    <div className="card shadow-lg p-4" style={{ maxWidth: 500, width: '100%', borderRadius: 16 }}>
                        <div className="d-flex flex-column align-items-center mb-4">
                            {/* Profile Picture at the top */}
                            {profile.avatar ? (
                                <img src={profile.avatar} alt={profile.fullName} className="rounded-circle mb-3" style={{ width: 90, height: 90 }} />
                            ) : (
                                <div className="rounded-circle mb-3 d-flex align-items-center justify-content-center" style={{ width: 90, height: 90, background: '#2280e0', color: '#fff', fontSize: '2.5rem', fontWeight: 700 }}>
                                    {getInitials(profile.fullName || 'P')}
                                </div>
                            )}
                            <div className="d-flex align-items-center gap-2">
                                <h2 className="m-0 fw-bold" style={{ fontSize: '2rem', color: '#2280e0' }}>{profile.fullName || 'Your Name'}</h2>
                                {/* Small edit icon (SVG pencil) */}
                                <button onClick={handleEdit} className="btn btn-link p-0 ms-2" aria-label="Edit Profile">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2280e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>
                                </button>
                            </div>
                        </div>
                        {editing ? (
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                <input name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" className="form-control" />
                                <input name="avatar" value={profile.avatar} onChange={handleChange} placeholder="Avatar URL (optional)" className="form-control" />
                                <input name="occupation" value={profile.occupation} onChange={handleChange} placeholder="Occupation" className="form-control" />
                                <input name="gender" value={profile.gender} onChange={handleChange} placeholder="Gender" className="form-control" />
                                <input name="dob" value={profile.dob} onChange={handleChange} placeholder="Date of Birth" className="form-control" />
                                <input name="nationality" value={profile.nationality} onChange={handleChange} placeholder="Nationality" className="form-control" />
                                <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" className="form-control" />
                                <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" className="form-control" />
                                <input name="address" value={profile.address} onChange={handleChange} placeholder="Home Address" className="form-control" />
                                <button type="submit" className="btn btn-primary fw-bold mt-2">Save Profile</button>
                            </form>
                        ) : (
                            <div className="mb-4">
                                <div className="mb-2"><strong>Occupation:</strong> {profile.occupation}</div>
                                <div className="mb-2"><strong>Gender:</strong> {profile.gender}</div>
                                <div className="mb-2"><strong>Date of Birth:</strong> {profile.dob}</div>
                                <div className="mb-2"><strong>Nationality:</strong> {profile.nationality}</div>
                                <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
                                <div className="mb-2"><strong>Phone:</strong> {profile.phone}</div>
                                <div className="mb-2"><strong>Home Address:</strong> {profile.address}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    padding: '0.7rem 1rem',
    borderRadius: 8,
    border: '1px solid #ddd',
    fontSize: '1rem',
};

export default Account
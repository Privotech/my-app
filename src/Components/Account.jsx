

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


    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f8fd', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
            {/* Side Navbar */}
            <aside style={{ width: 220, background: '#fff', boxShadow: '2px 0 8px rgba(34,128,224,0.07)', display: 'flex', flexDirection: 'column', padding: '2rem 1rem' }}>
                <h2 style={{ color: '#2280e0', fontWeight: 700, marginBottom: '2rem', fontSize: '1.5rem' }}>PrivoBank</h2>
                <nav style={{ flexGrow: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '1.5rem' }}><a href="/dashboard" style={{ color: '#2280e0', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Dashboard</a></li>
                        <li style={{ marginBottom: '1.5rem' }}><a href="/Account" style={{ color: '#333', textDecoration: 'none', fontSize: '1.1rem' }}>Accounts</a></li>
                        <li style={{ marginBottom: '1.5rem' }}><a href="/transfers" style={{ color: '#333', textDecoration: 'none', fontSize: '1.1rem' }}>Transfers</a></li>
                        <li style={{ marginBottom: '1.5rem' }}><a href="/bills" style={{ color: '#333', textDecoration: 'none', fontSize: '1.1rem' }}>Bills</a></li>
                        <li style={{ marginBottom: '1.5rem' }}><a href="/cards" style={{ color: '#333', textDecoration: 'none', fontSize: '1.1rem' }}>Cards</a></li>
                        <li style={{ marginBottom: '1.5rem' }}><a href="/support" style={{ color: '#333', textDecoration: 'none', fontSize: '1.1rem' }}>Support</a></li>
                    </ul>
                </nav>
                <a href="/login" style={{ color: '#888', marginTop: 'auto', textDecoration: 'none', fontSize: '1rem' }}>Logout</a>
            </aside>

            {/* Main Section with Top Navbar */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Top Navbar */}
                <nav style={{ height: 70, background: '#fff', boxShadow: '0 2px 8px rgba(34,128,224,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={profile.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(profile.fullName || 'P') + "&background=2280e0&color=fff&size=64"} alt="User" style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 16 }} />
                        <span style={{ fontWeight: 600, color: '#2280e0', fontSize: '1.1rem' }}>Welcome, {profile.fullName || 'Your Name'}</span>
                    </div>
                    <div>
                        <a href="/settings" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Settings</a>
                    </div>
                </nav>

                {/* Profile Card Section */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
                    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(34,128,224,0.09)', padding: '2.5rem 2rem', maxWidth: 500, width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '2rem' }}>
                            {/* Profile Picture at the top */}
                            {profile.avatar ? (
                                <img src={profile.avatar} alt={profile.fullName} style={{ width: 90, height: 90, borderRadius: '50%', marginBottom: 18 }} />
                            ) : (
                                <div style={{ width: 90, height: 90, borderRadius: '50%', background: '#2280e0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, marginBottom: 18 }}>
                                    {getInitials(profile.fullName || 'P')}
                                </div>
                            )}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <h2 style={{ margin: 0, fontWeight: 700, fontSize: '2rem', color: '#2280e0' }}>{profile.fullName || 'Your Name'}</h2>
                                {/* Small edit icon (SVG pencil) */}
                                <button onClick={handleEdit} style={{ background: 'none', border: 'none', padding: 0, marginLeft: 4, cursor: 'pointer' }} aria-label="Edit Profile">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2280e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>
                                </button>
                            </div>
                        </div>
                        {editing ? (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <input name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" style={inputStyle} />
                                <input name="avatar" value={profile.avatar} onChange={handleChange} placeholder="Avatar URL (optional)" style={inputStyle} />
                                <input name="occupation" value={profile.occupation} onChange={handleChange} placeholder="Occupation" style={inputStyle} />
                                <input name="gender" value={profile.gender} onChange={handleChange} placeholder="Gender" style={inputStyle} />
                                <input name="dob" value={profile.dob} onChange={handleChange} placeholder="Date of Birth" style={inputStyle} />
                                <input name="nationality" value={profile.nationality} onChange={handleChange} placeholder="Nationality" style={inputStyle} />
                                <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
                                <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" style={inputStyle} />
                                <input name="address" value={profile.address} onChange={handleChange} placeholder="Home Address" style={inputStyle} />
                                <button type="submit" style={{ background: '#2280e0', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1rem', marginTop: 8 }}>Save Profile</button>
                            </form>
                        ) : (
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ marginBottom: 10 }}><strong>Occupation:</strong> {profile.occupation}</div>
                                <div style={{ marginBottom: 10 }}><strong>Gender:</strong> {profile.gender}</div>
                                <div style={{ marginBottom: 10 }}><strong>Date of Birth:</strong> {profile.dob}</div>
                                <div style={{ marginBottom: 10 }}><strong>Nationality:</strong> {profile.nationality}</div>
                                <div style={{ marginBottom: 10 }}><strong>Email:</strong> {profile.email}</div>
                                <div style={{ marginBottom: 10 }}><strong>Phone:</strong> {profile.phone}</div>
                                <div style={{ marginBottom: 10 }}><strong>Home Address:</strong> {profile.address}</div>
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
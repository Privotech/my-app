import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [surName, setsurName] = useState('');
    const [firstName, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password,
                    surName,
                    firstName,
                    phoneNumber,
                    address,
                    gender
                })
            });
            const data = await res.json();
            if (res.ok) {
                setMessage('Signup successful! Redirecting to login...');
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            } else {
                setMessage(data.message || 'Signup failed.');
            }
        } catch (err) {
            console.log(err);

            setMessage('Server error.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f8fafc' }}>
            <div className="card shadow p-4" style={{ maxWidth: 420, width: '100%' }}>
                <h2 className="mb-4 text-center" style={{ color: '#2280e0', fontWeight: 700 }}>Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Surname</label>
                        <input type="text" className="form-control" value={surName} onChange={(e) => setsurName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Firstname</label>
                        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstname(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Sign Up</button>
                </form>
                {message && <div className="mt-3 text-center" style={{ color: message.includes('success') ? '#27ae60' : '#e74c3c', fontWeight: 600 }}>{message}</div>}
            </div>
        </div>
    );
}

export default Signup
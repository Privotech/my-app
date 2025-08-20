import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const res = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }
            setMessage(data.message);
            setFormData({ email: '', password: '' });
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: 420, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: '2.5rem 2rem' }}>
                <h2 style={{ textAlign: 'center', margin: 0, color: '#2280e0', fontWeight: 700, fontSize: 28 }}>Register</h2>
                <form onSubmit={onSubmit}>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                            style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                        />
                    </div>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                            minLength="6"
                            style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16, width: '100%' }}
                        />
                    </div>
                    <button type="submit" style={{ borderRadius: 8, fontWeight: 600, fontSize: 17, padding: '0.75rem 0', background: 'linear-gradient(90deg, #2280e0 0%, #43c6ac 100%)', border: 'none', width: '100%' }}>
                        Register
                    </button>
                </form>
                {message && <p style={{ color: message.includes('success') ? 'green' : 'red', marginTop: 16 }}>{message}</p>}
            </div>
        </div>
    );
};

export default Signup;
// ...existing code...

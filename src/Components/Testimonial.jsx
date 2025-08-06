import React from 'react';
import { Link } from 'react-router-dom';


const Testimonial = () => {
    const testimonials = [
        { name: 'Alice Johnson', text: 'This service exceeded my expectations!' },
        { name: 'Bob Smith', text: 'A wonderful experience from start to finish.' },
        { name: 'Carla Gomez', text: 'Highly recommended for everyone.' },
        { name: 'David Lee', text: 'Professional and reliable.' },
        { name: 'Emma Brown', text: 'I will definitely use this again.' },
        { name: 'Frank White', text: 'The team was very helpful.' },
        { name: 'Grace Kim', text: 'Fast and efficient service.' },
        { name: 'Henry Ford', text: 'Absolutely fantastic!' },
        { name: 'Ivy Chen', text: 'Great value for money.' },
        { name: 'Jack Black', text: 'Friendly staff and quick response.' },
        { name: 'Karen Green', text: 'I am very satisfied with the results.' },
        { name: 'Liam Scott', text: 'Top-notch customer support.' },
        { name: 'Mona Patel', text: 'Easy to use and very effective.' },
        { name: 'Nina Singh', text: 'I appreciate the attention to detail.' },
        { name: 'Oscar Rivera', text: 'A seamless process from beginning to end.' },
        { name: 'Paula Adams', text: 'Exceeded all my expectations.' },
        { name: 'Quinn Bell', text: 'I would recommend this to my friends.' },
        { name: 'Rita Clark', text: 'Very pleased with the outcome.' },
        { name: 'Sam Turner', text: 'Quick, easy, and affordable.' },
        { name: 'Tina Evans', text: 'Thank you for the excellent service!' },
        { name: 'Uma Brooks', text: 'The process was smooth and simple.' },
        { name: 'Victor Hugo', text: 'Impressed by the professionalism.' },
        { name: 'Wendy Morris', text: 'Customer care was outstanding.' },
        { name: 'Yusuf Ali', text: 'I will recommend this to everyone I know.' },
        { name: 'Zara Lane', text: 'Absolutely loved the personalized attention!' },
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-primary" to="/">PrivoBank💎</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Testimonials">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="btn btn-outline-primary ms-3">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="btn btn-outline-primary ms-3">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div style={{ padding: '2rem', background: '#f9f9f9' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What Our Clients Say</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '0.5rem',
                }}>
                    {testimonials.map((t, idx) => (
                        <div key={idx} style={{
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                            padding: '0.5rem',
                            textAlign: 'center',
                        }}>
                            <div style={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                background: '#e0e0e0',
                                margin: '0 auto 0rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 24,
                                color: '#555',
                                fontWeight: 'bold',
                            }}>
                                {t.name[0]}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '0rem' }}>&quot;{t.text}&quot;</p>
                            <h4 style={{ margin: 0, color: '#333' }}>{t.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Testimonial
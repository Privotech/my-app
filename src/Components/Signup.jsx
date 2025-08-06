import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
    const formik = useFormik({
        initialValues: { email: '', password: '', confirmPassword: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
            confirmPassword: Yup.string()
                .required('Required')
                .test('passwords-match', 'Passwords must match', function (value) {
                    return value === this.parent.password;
                }),
        }),
        onSubmit: (values, { setSubmitting }) => {
            alert(`Signup successful!\nEmail: ${values.email}`);
            setSubmitting(false);
        },
    });

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #3562b4ff 0%, #1d2836ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: 420, width: '100%', background: '#aaffedff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: '2.5rem 2rem' }}>
                <Link to="/" class="fa fa-arrow-circle-left" aria-hidden="true" style={{ marginRight: "-20px", color: "green", maxWidth: '300px', textDecoration: 'none', fontSize: '1.8rem', fontWeight: 700, display: 'inline-block' }}>←</Link>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2280e0 0%, #43c6ac 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 12
                    }}>
                        <svg width="32" height="32" fill="#fff" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>
                    </div>
                    <h2 style={{ textAlign: 'center', margin: 0, color: '#05305aff', fontWeight: 700, fontSize: 28 }}>Create your account</h2>
                    <p style={{ color: '#888', fontSize: 15, marginTop: 8, marginBottom: 0 }}>Join PrivoBank and start your journey.</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label htmlFor="email" style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16 }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label htmlFor="password" style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16 }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label htmlFor="confirmPassword" style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            style={{ borderRadius: 8, border: '1px solid #dbeafe', padding: '0.75rem', fontSize: 16 }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{ borderRadius: 8, fontWeight: 600, fontSize: 17, padding: '0.75rem 0', background: 'linear-gradient(90deg, #2280e0 0%, #43c6ac 100%)', border: 'none' }}
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Signing up...' : 'Sign Up'}
                    </button>
                    <h5 style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Already have an account? <Link to="/Login">Log in</Link>
                    </h5>
                </form>
            </div>
        </div>
    );
};

export default Signup;

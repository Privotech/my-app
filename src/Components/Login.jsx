import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { 
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email Address Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      alert(`Login successful!\nEmail: ${values.email}`);
      navigate("/Dashboard", { state: { email: values.email } });
      setSubmitting(false);
    },
  });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #12429cff 0%, #04070aff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 400, width: '100%', background: '#aaffedff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: '2.5rem 2rem' }}>
        <Link to="/" style={{ marginTop: "20px", color: "green", textDecoration: 'none', fontSize: '1.8rem', fontWeight: 700, display: 'inline-block' }}>←</Link>
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
          <h2 style={{ textAlign: 'center', margin: 0, color: '#2280e0', fontWeight: 700, fontSize: 28 }}>Log in to your account</h2>
          <p style={{ color: '#888', fontSize: 15, marginTop: 8, marginBottom: 0 }}>Welcome back! Please enter your details.</p>
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
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ borderRadius: 8, fontWeight: 600, fontSize: 17, padding: '0.75rem 0', background: 'linear-gradient(90deg, #2280e0 0%, #43c6ac 100%)', border: 'none' }}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <h5 style={{ textAlign: 'center', marginTop: '1rem' }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
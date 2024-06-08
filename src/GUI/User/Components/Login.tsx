import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/Store'; // Add this line
import { loginUser } from '../../../store/slices/AuthSlice';
import { ToastContainer } from 'react-toastify';
import { showToastMessage } from '../../../Other/CustomToast';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const success = new URLSearchParams(window.location.search).get('registersuccess');

    const { loading, error } = useSelector((state: RootState) => state.auth);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (success) {
            showToastMessage('Account created successfully', 'success');
        }
        try {
            const { roles } = await dispatch(loginUser({ username, password })).unwrap();
            if (roles.includes('ADMIN')) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (err) {
            console.error('Failed to login:', err);
        }
    };


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" />
                </Helmet>
            </HelmetProvider>
            <ToastContainer />
            <section className="h-100">

                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="text-center my-5">
                                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100" />
                            </div>
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                    <form onSubmit={handleSubmit} className="needs-validation">
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="username">Username</label>
                                            <input
                                                id="username"
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Username is invalid
                                            </div>
                                        </div>
                                        <div className="mb-3">

                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password">Password</label>
                                                <a href="forgot.html" className="float-end">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <div className="d-flex align-items-center">
                                            <div className="form-check">
                                                <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                                <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary ms-auto" disabled={loading}>
                                                {loading ? 'Logging in...' : 'Login'}
                                            </button>
                                        </div>
                                        {loading && <p>Loading...</p>}
                                        {error && <p>Error: {error}</p>}
                                    </form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        Don't have an account? <a href="/register" className="text-dark">Create One</a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-5 text-muted">
                                Copyright &copy; 2017-2021 &mdash; Your Company
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

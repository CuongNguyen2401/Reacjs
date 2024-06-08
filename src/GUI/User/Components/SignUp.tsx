import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { registerUser } from './../../../store/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { showToastMessage } from '../../../Other/CustomToast';
import { Toast, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== rePassword) {
            console.error('Passwords do not match');
            return;
        }
        try {
            await dispatch(registerUser({
                username,
                password,
                email,
            }) as any);
            showToastMessage('Account created successfully', 'success');
            navigate('/login');

        } catch (err) {
            console.error('Failed to sign up:', err);
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
                                    <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                    <form onSubmit={handleSubmit} className="needs-validation">
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="username">Username</label>
                                            <input
                                                id="username"
                                                type="text"
                                                className="form-control"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Username is required
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Email is required
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="password">Password</label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="rePassword">Confirm Password</label>
                                            <input
                                                id="rePassword"
                                                type="password"
                                                className="form-control"
                                                value={rePassword}
                                                onChange={(e) => setRePassword(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please re-enter your password
                                            </div>
                                        </div>

                                        <p className="form-text text-muted mb-3">
                                            By registering you agree with our terms and condition.
                                        </p>

                                        <div className="align-items-center d-flex">
                                            <button type="submit" className="btn btn-primary ms-auto">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        Already have an account? <a href="/login" className="text-dark">Login</a>
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



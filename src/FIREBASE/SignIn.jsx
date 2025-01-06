

import React, { useState } from 'react';
import { app } from './Login';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

export default function SignIn() {
    const navigate = useNavigate();
    const [input, setInput] = useState({ email: '', pass: '' });

    const handleForm = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, input.email, input.pass)
            .then((userCredential) => {
                console.log('User signed in');
                setInput({ email: '', pass: '' });
                const userEmail = userCredential.user.email;
                navigate('/showdata', { state: { email: userEmail } });
            })
            .catch((err) => {
                console.error('Error signing in:', err.message);
                alert('Invalid email or password. Please try again.');
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h1 className="text-center mb-4">Sign In</h1>
                <form onSubmit={handleForm}>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={input.pass}
                            onChange={(e) => setInput({ ...input, pass: e.target.value })}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <Link to="/forget" className="btn btn-link">
                        Forget Password
                    </Link>
                </div>
            </div>
        </div>
    );
}

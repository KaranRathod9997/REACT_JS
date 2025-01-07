

import React, { useState } from 'react';
import { app } from './Authentication/Login';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

export default function ForgetPass() {
    const [email, setEmail] = useState('');

    const handlePass = (e) => {
        e.preventDefault();
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => alert("Password reset email sent successfully."))
                .catch((err) => alert("Error: " + err.message));
            setEmail('');
        } else {
            alert("Please enter a valid email.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h1 className="text-center mb-4">Forget Password</h1>
                <form onSubmit={handlePass}>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Send Email
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <Link to="/signin" className="btn btn-link">
                        Back to Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

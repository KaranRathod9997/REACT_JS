


import React, { useState } from 'react';
import { app } from '../Authenticatin_With_Google/Login';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

export default function SignUp() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        pass: ''
    });

    const handleForm = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, input.email, input.pass)
            .then((userCredential) => {
                console.log('User signed up successfully.');
                const email = userCredential.user.email;
                setInput({ email: '', pass: '' });
                navigate('/showdata', { state: { email } });
            })
            .catch((err) => {
                console.error('Error signing up:', err.message);
                alert('Sign-up failed. Please try again with valid credentials.');
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h1 className="text-center mb-4">Sign Up</h1>
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
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

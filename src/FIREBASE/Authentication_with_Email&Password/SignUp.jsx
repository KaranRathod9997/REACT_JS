

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { app } from './Login';

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
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
            <div className="bg-white space-y-8 p-8 rounded-xl shadow-lg w-full max-w-md">
                
                <h1 className="text-center text-2xl font-semibold mb-6 ">Instagram</h1>
                <form onSubmit={handleForm} className='space-y-4'>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={input.pass}
                            onChange={(e) => setInput({ ...input, pass: e.target.value })}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-500">
                    Already have an account?
                    <Link to="/signin" className="text-blue-500 hover:underline">Log in</Link>
                </div>
            </div>
        </div>
    );
}

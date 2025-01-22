import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { app } from './Login';

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
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 flex justify-center items-center">
            <div className="bg-white space-y-8 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-center text-2xl font-semibold mb-6">Instagram</h1>
                <form onSubmit={handleForm} className="space-y-4">
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
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-500">
                    <Link to="/forget" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

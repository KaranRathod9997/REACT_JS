import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { app } from './Login';

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
        <div className="min-h-screen bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 flex justify-center items-center">
            <div className="bg-white space-y-8 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-center text-2xl font-semibold mb-6">Forget Password</h1>
                <form onSubmit={handlePass} className="space-y-4">
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                        Send Email
                    </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-500">
                    <Link to="/signin" className="text-yellow-500 hover:underline">
                        Back to Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

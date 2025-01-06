
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { app } from './Login';

const auth = getAuth(app);

export default function ShowData() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out successfully.');
        navigate('/signin');
      })
      .catch((err) => {
        console.error('Error during logout:', err.message);
        alert('Logout failed. Please try again.');
      });
  };

  return (
    <div className="container" style={{ paddingTop: '50px' }}>
      <div className="card p-4 shadow-lg">
        <h1 className="text-center mb-4">User Data</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email</td>
              <td>{email || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button onClick={handleLogout} className="btn btn-danger mt-4">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

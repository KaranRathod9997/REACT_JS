

import React, { useState } from 'react';

const UserApi = () => {
    const [userData, setUserData] = useState(null);

    const fetchUserData = () => {
        fetch("https://randomuser.me/api")
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                setUserData({
                    image: user.picture.large,
                    name: user.name.first + ' ' + user.name.last,
                    email: user.email,
                    location: user.location.city + ', ' + user.location.country
                });
            })
            .catch(error => console.error("Error fetching user data: ", error));
    };

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <h1 className="mb-4">Random User Data API</h1>
            <button
                className="btn btn-primary btn-lg shadow-lg mb-4"
                onClick={fetchUserData}
                style={{ width: '250px', fontSize: '18px' }}
            >
                Get Random User Data
            </button>

            {userData && (
                <div className="card shadow-lg" style={{ width: '18rem', margin: '10px', borderRadius: '10px' }}>
                    <img
                        src={userData.image}
                        className="card-img-top"
                        alt="Random User"
                        style={{ borderRadius: '10px 10px 0 0' }}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ fontSize: '20px' }}>{userData.name}</h5>
                        <p style={{ fontSize: '14px', color: '#6c757d' }}>
                            <strong>Email:</strong> {userData.email}
                        </p>
                        <p style={{ fontSize: '14px', color: '#6c757d' }}>
                            <strong>Location:</strong> {userData.location}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserApi;

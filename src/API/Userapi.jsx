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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Random User Data API</h1>
            <button
                className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 text-lg font-semibold mb-6"
                onClick={fetchUserData}
            >
                Get Random User Data
            </button>

            {userData && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
                    {/* User Image */}
                    <img
                        src={userData.image}
                        alt="Random User"
                        className="w-full h-56 object-cover"
                    />

                    {/* User Details */}
                    <div className="p-6 text-center">
                        <h5 className="text-xl font-bold text-gray-800 mb-2">{userData.name}</h5>
                        <p className="text-sm text-gray-600 mb-2">
                            <strong>Email:</strong> {userData.email}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Location:</strong> {userData.location}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserApi;

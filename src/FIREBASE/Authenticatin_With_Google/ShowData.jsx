import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../Authentication_with_Email&Password/Login'

const auth = getAuth(app)

export default function ShowData({ display, email, image }) {

    const SignOutGoogle = () => {
        signOut(auth)
            .then(() => console.log("SignOut successful"))
            .catch((err) => console.log(err))
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 text-center">
                <h1 className="text-2xl font-semibold text-indigo-600 mb-4">User Data</h1>

                {/* User Profile Image */}
                <img 
                    src={image} 
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4" 
                />

                {/* Display Name */}
                <h3 className="text-xl font-medium text-gray-800 mb-2">{display}</h3>

                {/* Email Address */}
                <h3 className="text-lg text-gray-600 mb-6">{email}</h3>

                {/* Sign Out Button */}
                <button
                    onClick={SignOutGoogle}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}


// import React from "react";
// import { app } from "./Data";
// import { getAuth, signOut } from "firebase/auth";
// import "bootstrap/dist/css/bootstrap.min.css";

// const auth = getAuth(app);

// export default function ShowData({ display, email, image }) {
//     // Sign-Out Functionality
//     const handleSignOut = () => {
//         signOut(auth)
//             .then(() => console.log("Sign-Out successful"))
//             .catch((err) => console.error("Sign-Out Error:", err));
//     };

//     // Fallback image for missing photoURL
//     const fallbackImage = "https://via.placeholder.com/150";

//     return (
//         <div className="container text-center mt-5">
//             <h1>User Details</h1>
//             {/* Show image only if it exists, otherwise show fallback image */}
//             <img
//                 src={image ? image : fallbackImage}  // Use the user's photoURL or fallback image
//                 alt="User"
//                 className="rounded-circle mt-3"
//                 style={{ width: "150px", height: "150px" }}
//             />
//             <h3 className="mt-3">{display || "Anonymous User"}</h3>
//             <h5>{email || "No Email Provided"}</h5>
//             <button className="btn btn-danger mt-4" onClick={handleSignOut}>
//                 Sign Out
//             </button>
//         </div>
//     );
// }


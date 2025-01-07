import React from 'react'
import { app } from './Data'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(app)

export default function ShowData({ display, email, image }) {
    const SignOutGoogle = () => {
        signOut(auth)
            .then(() => console.log("SignOut ....."))
            .catch((err) => console.log(err))
    }
    return (
        <>
            <h1>ShowData</h1>
            <img src={image} alt="" />
            <h3>{display}</h3>
            <h3>{email}</h3>
            <button onClick={SignOutGoogle}>SignOut</button>
        </>
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


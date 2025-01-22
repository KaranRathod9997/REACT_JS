import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import ShowData from './ShowData'
import { app } from '../Authentication_with_Email&Password/Login'

const auth = getAuth(app)

export default function Google_SignIn() {

    const Provider = new GoogleAuthProvider()
    const [user, setUser] = useState("")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        });
        return () => unsubscribe()
    }, [auth])

    const SignInWithGoogle = () => {
        signInWithPopup(auth, Provider)
            .then(() => console.log("SignIn..."))
            .catch((err) => console.log(err))
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 text-center">
                {user ? (
                    <ShowData
                        display={user.displayName}
                        email={user.email}
                        image={user.photoURL}
                    />
                ) : (
                    <>
                        <h1 className="text-2xl font-semibold text-indigo-600 mb-6">Google SignIn</h1>
                        <button
                            onClick={SignInWithGoogle}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Sign In with Google
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}


// import React, { useEffect, useState } from "react";
// import { app } from "./Data";
// import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import ShowData from "./ShowData";
// import "bootstrap/dist/css/bootstrap.min.css";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export default function GoogleSignIn() {
//   const [user, setUser] = useState(null);

//   // Listen to auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log(currentUser);  // Log the user object to check if photoURL is available
//     });
//     return () => unsubscribe();
//   }, []);

//   // Google Sign-In
//   const handleSignIn = () => {
//     signInWithPopup(auth, provider)
//       .then(() => console.log("Sign-In successful"))
//       .catch((err) => console.error("Sign-In Error:", err));
//   };

//   return (
//     <div className="container text-center mt-5">
//       {user ? (
//         <ShowData
//           display={user.displayName}
//           email={user.email}
//           image={user.photoURL}
//         />
//       ) : (
//         <>
//           <h1>Sign In with Google</h1>
//           <button className="btn btn-primary mt-3" onClick={handleSignIn}>
//             Sign In with Google
//           </button>
//         </>
//       )}
//     </div>
//   );
// }



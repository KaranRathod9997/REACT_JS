
import './App.css';
// import Spreading from './Spreading'; // Correctly import Spreading component

// Remove or update the commented imports when needed

// If you need to use APIs, uncomment these as needed:
// import Apiaxios from './API/Apiaxios.jsx';
// import DogAPI from './API/DogAPI.jsx';
// import StoreApi from './API/StoreApi.jsx';
// import UserApi from './API/Userapi.jsx';

// import Counter from './Counter';
// import Props from './Props';
// import Comment from './Comment';
// import Crud from './Crud';

// import AddData from './redux/AddData.jsx';

// Firebase-related imports (uncomment if you use Firebase Authentication and Database)
// import InstagramLoginForm from "./Firebase/InstagramLoginForm.jsx";
// import FireStoreDataBase from "./FIREBASE/FireStore_DataBase/FireStoreDataBase";
// import RealTimeDataBase from "./FIREBASE/RealTime_DataBase/RealTimeDataBase";

// Firebase Auth imports and usage:
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { app } from './FIREBASE/Authentication_with_Email&Password/Login.js';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import SignUp from './FIREBASE/Authentication_with_Email&Password/SignUp.jsx';
// import SignIn from './FIREBASE/Authentication_with_Email&Password/SignIn.jsx';
// import ForgetPass from './FIREBASE/Authentication_with_Email&Password/ForgetPass.jsx';
// import ShowData from './FIREBASE/Authentication_with_Email&Password/ShowData.jsx';

import Google_SignIn from "./FIREBASE/Authenticatin_With_Google/Google_SignIn";

// const auth = getAuth(app);

function App() {

  // Sample data (commented out for now)
  // const Student = { name: "karan", age: 20, city: "ahmedabad" };
  // const arr = [1, "karan", 2, "laxman"];

  // Firebase Auth - Uncomment and update if using Firebase
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      {/* Uncomment and add API components as needed */}
      {/* <Apiaxios /> */}
      {/* <DogAPI /> */}
      {/* <StoreApi /> */}
      {/* <UserApi /> */}

      {/* Uncomment and use other components when required */}
      {/* <Props arrray={arr} studentdata={Student} /> */}
      {/* <Counter /> */}
      {/* <Comment /> */}
      {/* <Crud /> */}
      {/* <AddData /> */}

      {/* Uncomment Firebase-related components */}
      {/* <InstagramLoginForm /> */}
      {/* <RealTimeDataBase /> */}
      {/* <FireStoreDataBase /> */}

      {/* Firebase Authentication routes */}
      {/* <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forget" element={<ForgetPass />} />
        <Route
          path="/showdata"
          element={user ? <ShowData email={user.email} /> : <Navigate to="/signin" replace />}
        />
      </Routes> */}

      {/* Google SignIn */}
      <Google_SignIn />

      {/* Spreading component */}
      {/* <Spreading /> */}
    </>
  );
}

export default App;

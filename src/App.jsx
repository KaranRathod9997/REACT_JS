
// import './App.css'
// import FireStoreDataBase from './Firebase/FireStoreDataBase';
// import RealTimeDataBase from './Firebase/RealTimeDataBase';
// import Counter from './Counter';
// import Props from './Props';
// import Spreading from './Spreading';
// import Comment from './comment';
// import Crud from './Crud'
// import AddData from './redux/AddData.jsx';
// import UserApi from './API/Userapi.jsx';
// import Apiaxios from './API/Apiaxios.jsx';
// import DogAPI from './API/DogAPI.jsx';
// import StoreApi from './API/StoreApi.jsx';
// import InstagramLoginForm from "./Firebase/InstagramLoginForm.jsx";

import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './FIREBASE/SignIn.jsx';
import SignUp from './FIREBASE/SignUp.jsx';
import ShowData from './FIREBASE/ShowData.jsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './FIREBASE/Login.js';
import { useEffect, useState } from 'react';
import ForgetPass from './FIREBASE/ForgetPass.jsx';

const auth = getAuth(app)

function App() {

    //  const Student = {
    //   name:"karan",
    //   age:20,
    //   city:"ahmedabad",
    // }

    // const arr = [1,"karan",2,"laxman"]

    // Firebase Auth :
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  // .............................

  return (
    <>
      {/* <Spreading/> */}
      {/* <Props arrray={arr} studentdata={Student} /> */}
      {/* <Counter /> */}
      {/* <Comment /> */}
      {/* <Crud /> */}
      {/* <AddData /> */}
      {/* <UserApi /> */}
      {/* <Apiaxios /> */}
      {/* <DogAPI /> */}
      {/* <StoreApi /> */}
      {/* <RealTimeDataBase /> */}
      {/* <FireStoreDataBase /> */}
      {/* <InstagramLoginForm /> */}

      {/* Firebase Auth*/}
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route
            path="/showdata"
            element={user ? <ShowData email={user.email} /> : <Navigate to="/signin" replace />}
          />
        </Routes>
      </>
    </>
  )
}

export default App;


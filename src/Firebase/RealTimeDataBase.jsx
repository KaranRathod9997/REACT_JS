


import React, { useState } from 'react';
import { getDatabase, ref, set, remove, update } from 'firebase/database';
import { app } from './data';

const db = getDatabase(app);

function RealTimeDataBase() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [arr, setArr] = useState([]);

  // Handle form input and update arr state
  const HandleForm = (e) => {
    e.preventDefault();
    setArr([...arr, input]);
    setInput({
      name: "",
      password: "",
    });
  };

  // Add data to Firebase Realtime Database
  const AddData = () => {
    // Use push() to add new data dynamically with unique IDs in Firebase Realtime DB
    const newRef = ref(db, "users/"); // Reference to "users" node
    set(newRef, {
      name: input.name,
      password: input.password,
    })
      .then(() => {
        console.log("Data Added");
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  };

  // Delete specific data from Firebase Realtime Database
  const DeleteData = () => {
    // Replace this with a real key or reference you want to delete
    const deleteRef = ref(db, "users/some_key"); // Use correct reference
    remove(deleteRef)
      .then(() => {
        console.log("Data Deleted");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Edit data in Firebase Realtime Database
  const EditData = () => {
    // Replace this with the correct reference to the data you want to update
    const editRef = ref(db, "users/some_key"); // Use correct reference
    update(editRef, {
      name: input.name,
      password: input.password,
    })
      .then(() => {
        console.log("Data Updated");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <h1>Firebase Realtime Database</h1>
      <form onSubmit={HandleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button type="button" onClick={AddData}>Add Data</button>
        <button type="button" onClick={DeleteData}>Delete Data</button>
        <button type="button" onClick={EditData}>Edit Data</button>
      </form>
    </>
  );
}

export default RealTimeDataBase;

import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, remove, update, onValue } from "firebase/database";
import { app } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";

const db = getDatabase(app);

function RealTimeDataBase() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [dataList, setDataList] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch data from Firebase Realtime Database
  useEffect(() => {
    const dataRef = ref(db, "users/");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = [];
        for (let key in data) {
          formattedData.push({
            id: key,
            ...data[key],
          });
        }
        setDataList(formattedData);
      } else {
        setDataList([]);
      }
    });
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Add or update data in Firebase
  const addOrUpdateData = () => {
    if (!input.name || !input.password) {
      alert("Please fill out all fields.");
      return;
    }

    if (editId) {
      const dataRef = ref(db, `users/${editId}`);
      update(dataRef, input)
        .then(() => {
          console.log("Data updated successfully");
          setEditId(null);
          setInput({ name: "", password: "" });
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    } else {
      const dataRef = ref(db, "users/");
      push(dataRef, input)
        .then(() => {
          console.log("Data added successfully");
          setInput({ name: "", password: "" });
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
    }
  };

  // Delete data from Firebase
  const deleteData = (id) => {
    const dataRef = ref(db, `users/${id}`);
    remove(dataRef)
      .then(() => {
        console.log("Data deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Prepare data for editing
  const prepareEditData = (item) => {
    setInput({ name: item.name, password: item.password });
    setEditId(item.id);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Firebase Realtime Database</h1>

      {/* Form Section */}
      <form
        className="row g-3 mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          addOrUpdateData();
        }}
      >
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={input.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={input.password}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            {editId ? "Update Data" : "Add Data"}
          </button>
        </div>
      </form>

      {/* Table Section */}
      <h2>User List</h2>
      {dataList.length > 0 ? (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => prepareEditData(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No data available.</p>
      )}
    </div>
  );
}

export default RealTimeDataBase;



import React, { useState, useEffect } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { app } from "../Authentication_with_Email&Password/Login";

const db = getFirestore(app);

function FireStoreDataBase() {
    const [input, setInput] = useState({
        name: "",
        password: "",
    });

    const [dataList, setDataList] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "User"));
            const fetchedData = [];
            querySnapshot.forEach((doc) => {
                fetchedData.push({ id: doc.id, ...doc.data() });
            });
            setDataList(fetchedData);
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const addOrUpdateData = async () => {
        if (!input.name || !input.password) {
            alert("Please fill out all fields.");
            return;
        }

        if (editId) {
            const docRef = doc(db, "User", editId);
            await updateDoc(docRef, input)
                .then(() => {
                    console.log("Data updated successfully");
                    fetchUpdatedData();
                })
                .catch((error) => console.error("Error updating data:", error));
        } else {
            await addDoc(collection(db, "User"), input)
                .then(() => {
                    console.log("Data added successfully");
                    fetchUpdatedData();
                })
                .catch((error) => console.error("Error adding data:", error));
        }

        setInput({ name: "", password: "" });
        setEditId(null);
    };

    const deleteData = async (id) => {
        const docRef = doc(db, "User", id);
        await deleteDoc(docRef)
            .then(() => {
                console.log("Data deleted successfully");
                fetchUpdatedData();
            })
            .catch((error) => console.error("Error deleting data:", error));
    };

    const fetchUpdatedData = async () => {
        const querySnapshot = await getDocs(collection(db, "User"));
        const updatedData = [];
        querySnapshot.forEach((doc) => {
            updatedData.push({ id: doc.id, ...doc.data() });
        });
        setDataList(updatedData);
    };

    const prepareEditData = (item) => {
        setInput({ name: item.name, password: item.password });
        setEditId(item.id);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Firestore Database</h1>

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

export default FireStoreDataBase;

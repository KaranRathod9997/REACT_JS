import React, { useState, useEffect } from 'react';
import './Crud.css';  // Assuming the CSS is stored in FormStyles.css

export default function Array_form() {
    const [input, setInput] = useState({
        name: "",
        Pass: "",
        email: "", 
        gender: "",
        checked: [],
    });

    const [file, setFile] = useState(null);

    const [arr, setArr] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [edit, setEdit] = useState(null);

    const handleForm = (e) => {
        e.preventDefault();

        const fileURL = file ? URL.createObjectURL(file) : null;

        const newItem = {
            name: input.name,
            Pass: input.Pass,
            email: input.email,  
            gender: input.gender,
            checked: input.checked,
            file: fileURL,
        };

        if (edit !== null) {
            const updatedArr = [...arr];
            updatedArr[edit] = newItem;
            setArr(updatedArr);
            setEdit(null); 
        } else {
            setArr([...arr, newItem]);
        }

        setFile(null);
        setInput({ name: "", Pass: "", email: "", gender: "", checked: [] });
        e.target.reset();
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setInput((prev) => ({
                ...prev,
                checked: [...prev.checked, value],
            }));
        } else {
            setInput((prev) => ({
                ...prev,
                checked: prev.checked.filter((item) => item !== value),
            }));
        }
    };

    const saveImage = (e) => {
        const addFile = e.target.files[0];
        setFile(addFile);
    };

    const deletedata = (i) => {
        const updatedData = arr.filter((_, index) => index !== i);
        setArr(updatedData);
    };

    const editdata = (i) => {
        setInput(arr[i]);
        setEdit(i);
    };

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr]);

    useEffect(() => {
        return () => {
            if (file) {
                URL.revokeObjectURL(file);
            }
        };
    }, [file]);

    return (
        <>
            <form onSubmit={handleForm} className="form-container">
                <h2 className="form-title">User Information Form</h2>

                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                    className="input-field"
                /><br /><br />

                <input
                    type="email"  
                    placeholder="Enter your Email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                    className="input-field"
                /><br /><br />

                <input
                    type="password"
                    placeholder="Enter your Password"
                    value={input.Pass}
                    onChange={(e) => setInput({ ...input, Pass: e.target.value })}
                    className="input-field"
                /><br /><br />

                <div className="gender-selection">
                    <label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={(e) => setInput({ ...input, gender: e.target.value })}
                            checked={input.gender === "male"}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={(e) => setInput({ ...input, gender: e.target.value })}
                            checked={input.gender === "female"}
                        />
                        Female
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            onChange={(e) => setInput({ ...input, gender: e.target.value })}
                            checked={input.gender === "other"}
                        />
                        Other
                    </label>
                </div><br />

                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            id="10th"
                            value="10th"
                            checked={input.checked.includes("10th")}
                            onChange={handleCheckboxChange}
                        />
                        10th
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="12th"
                            value="12th"
                            checked={input.checked.includes("12th")}
                            onChange={handleCheckboxChange}
                        />
                        12th
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="mba"
                            value="mba"
                            checked={input.checked.includes("mba")}
                            onChange={handleCheckboxChange}
                        />
                        MBA
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="mca"
                            value="mca"
                            checked={input.checked.includes("mca")}
                            onChange={handleCheckboxChange}
                        />
                        MCA
                    </label>
                </div>

                <br /><br />
                <input
                    type="file"
                    accept="images/*"
                    onChange={saveImage}
                    className="file-input"
                />

                <button className="submit-btn">{edit !== null ? "Update" : "Submit"}</button>
            </form><br /><br /><br />

            {arr.length > 0 && (
                <table className="data-table">
                    <thead>
                        <tr>
                            <td>Sr No.</td>
                            <td>Name</td>
                            <td>Password</td>
                            <td>Email</td> 
                            <td>Gender</td>
                            <td>Checked</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((ele, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.Pass}</td>
                                <td>{ele.email}</td> 
                                <td>{ele.gender}</td>
                                <td>{ele.checked.join(", ")}</td>
                                <td><img src={ele.file} alt={ele.name} className="file-image" /></td>
                                <td>
                                    <button className="edit-btn" onClick={() => editdata(i)}>edit</button>
                                    <button className="delete-btn" onClick={() => deletedata(i)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

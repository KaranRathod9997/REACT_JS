import React, { useState, useEffect } from 'react';
// import './Crud.css'; 

export default function Array_form() {
    const [input, setInput] = useState({
        name: "",
        Pass: "",
        email: "",
        gender: "",
        qualifications: [],
    });

    const [file, setFile] = useState(null);
    const [searchquery, setSearchquery] = useState("");

    const [arr, setArr] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [edit, setEdit] = useState(null);

    const handleForm = (e) => {
        e.preventDefault();


        if (!input.name || !input.email || !input.Pass || !input.gender || input.qualifications.length === 0) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const fileURL = file ? URL.createObjectURL(file) : null;

        const newItem = {
            name: input.name,
            Pass: input.Pass,
            email: input.email,
            gender: input.gender,
            qualifications: input.qualifications,
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
        setInput({ name: "", Pass: "", email: "", gender: "", qualifications: [] });
        e.target.reset();
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setInput((prev) => ({
                ...prev,
                qualifications: [...prev.qualifications, value],
            }));
        } else {
            setInput((prev) => ({
                ...prev,
                qualifications: prev.qualifications.filter((item) => item !== value),
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

    const filteredarr = arr.filter((e) =>
        e.name.toLowerCase().includes(searchquery.toLowerCase())
    );

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
                            checked={input.qualifications.includes("10th")}
                            onChange={handleCheckboxChange}
                        />
                        10th
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="12th"
                            value="12th"
                            checked={input.qualifications.includes("12th")}
                            onChange={handleCheckboxChange}
                        />
                        12th
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="mba"
                            value="mba"
                            checked={input.qualifications.includes("mba")}
                            onChange={handleCheckboxChange}
                        />
                        MBA
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="mca"
                            value="mca"
                            checked={input.qualifications.includes("mca")}
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
                <br /><br />

                <button className="submit-btn">{edit !== null ? "Update" : "Submit"}</button>
            </form><br />

            {arr.length > 0 && (
                <>
                    <input
                        type="text"
                        placeholder='Search by Name'
                        value={searchquery}
                        onChange={(e) => setSearchquery(e.target.value)}
                    /><br /><br />
                </>
            )}

            {filteredarr.length > 0 && (
                <table className="data-table">
                    <thead>
                        <tr>
                            <td>Sr No.</td>
                            <td>Name</td>
                            <td>Password</td>
                            <td>Email</td>
                            <td>Gender</td>
                            <td>Qualifications</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredarr.map((ele, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.Pass}</td>
                                <td>{ele.email}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.qualifications.join(", ")}</td>
                                <td><img src={ele.file} alt={ele.name} className="file-image" /></td>
                                <td>
                                    <button className="edit-btn" onClick={() => editdata(i)}>Edit</button>
                                    <button className="delete-btn" onClick={() => deletedata(i)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

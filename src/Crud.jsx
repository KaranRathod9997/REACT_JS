import React, { useState, useEffect } from 'react';

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
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                /><br /><br />

                <input
                    type="email"  
                    placeholder="Enter your Email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                /><br /><br />

                <input
                    type="password"
                    placeholder="Enter your Password"
                    value={input.Pass}
                    onChange={(e) => setInput({ ...input, Pass: e.target.value })}
                /><br /><br />

                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(e) => setInput({ ...input, gender: e.target.value })}
                    checked={input.gender === "male"}
                />
                <label htmlFor="male">male</label>

                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e) => setInput({ ...input, gender: e.target.value })}
                    checked={input.gender === "female"}
                />
                <label htmlFor="female">female</label>

                <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={(e) => setInput({ ...input, gender: e.target.value })}
                    checked={input.gender === "other"}
                />
                <label htmlFor="other">other</label><br /><br />

                <input
                    type="checkbox"
                    id="10th"
                    value="10th"
                    checked={input.checked.includes("10th")}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="10th">10th</label>

                <input
                    type="checkbox"
                    id="12th"
                    value="12th"
                    checked={input.checked.includes("12th")}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="12th">12th</label>

                <input
                    type="checkbox"
                    id="mba"
                    value="mba"
                    checked={input.checked.includes("mba")}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="mba">MBA</label>

                <input
                    type="checkbox"
                    id="mca"
                    value="mca"
                    checked={input.checked.includes("mca")}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="mca">MCA</label>

                <br /><br />
                <input
                    type="file"
                    accept="images/*"
                    onChange={saveImage}
                />

                <button>{edit !== null ? "Update" : "Submit"}</button>
            </form><br /><br /><br />

            {arr.length > 0 && (
                <table border={1}>
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
                                <td><img src={ele.file} alt={ele.name} style={{ width: "50px" }} /></td>
                                <td>
                                    <button onClick={() => editdata(i)}>edit</button>
                                    <button onClick={() => deletedata(i)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}




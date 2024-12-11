import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataAction, deleteItem, editDataAction } from "./action";

function AddData() {
    const [input, setInput] = useState({
        name: "",
        Pass: "",
        email: "",
    });

    const [editIndex, setEditIndex] = useState(null);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.items);

    const handleForm = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            dispatch(editDataAction({ i: editIndex, item: input }));
            setEditIndex(null); 
        } else {
            dispatch(addDataAction(input));
        }
        setInput({ name: "", Pass: "", email: "" }); 
    };

    const deleteData = (i) => {
        dispatch(deleteItem(i));
    };

    const editData = (i) => {
        const editItem = data[i];
        setInput(editItem); 
        setEditIndex(i); 
    };

    return (
        <>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                <br />
                <br />

                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                />
                <br />
                <br />

                <input
                    type="password"
                    placeholder="Enter your Password"
                    value={input.Pass}
                    onChange={(e) => setInput({ ...input, Pass: e.target.value })}
                />
                <br />
                <br />
                <button type="submit">{editIndex === null ? "Submit" : "Update"}</button>
            </form>
            <br />
            <br />
            <br />

            {data.length > 0 && (
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Sr No.</td>
                            <td>Name</td>
                            <td>Password</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ele, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.Pass}</td>
                                <td>{ele.email}</td>
                                <td>
                                    <button onClick={() => deleteData(i)}>Delete</button>
                                    <button onClick={() => editData(i)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default AddData;
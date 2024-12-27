import React, { useState } from 'react'

import { addDoc, collection, deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore'
import App from '../App'

const db = getFirestore(App)

function FireStoreDataBase() {

    const [input, setInput] = useState({
        name: "",
        password: "",
    })

    const [arr, setArr] = useState([])

    const HandleForm = (e) => {
        e.preventDefault()
        setArr({ ...arr, input })
        setInput({
            name: "",
            password: "",
        })
    }

    const addData = async () => {
        await addDoc(collection(db, "User"), {
            name: input.name,
            password: input.password,
        })
        console.log("Data added");

    }


    const deleteData = async () => {
        const data = doc(db, "User", "GIrLeIriEH27vyPbcrOz");
        await deleteDoc(data)
            .then(() => console.log("Deleted Data"))
            .catch((error) => console.error("Error : ", error));
    };


    const UpdateData = async () => {
        const data = doc(db, "User", "jUah7jdUHYUkx1gOexab")
        await updateDoc(data, {
            name: input.name,
            password: input.password
        }).then(() => console.log("Data Updated"))
    }

    return (

        <>
            <center>
                <h2>...FireStore DataBase...</h2> <br />
                <form onSubmit={HandleForm}>
                    <input type="text" placeholder='Enter Name' value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} /> <br /><br />

                    <input type="password" placeholder='Enter Password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} /> <br /><br />

                    <button onClick={addData}>Add Data</button>
                    <br /><br />
                    <button onClick={deleteData}>Delete Data</button><br /><br />
                    <button onClick={UpdateData}>Update Data</button><br /><br />
                </form>
            </center>
        </>
    )
}

export default FireStoreDataBase


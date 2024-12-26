import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Apiaxios() {
    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((value) => {
                setArr(value.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Comments List</h1>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map((ele, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Apiaxios;

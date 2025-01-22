import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-extrabold text-gray-700 text-center mb-6">
                    Comments List
                </h1>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                            <span className="text-lg font-semibold text-blue-500">
                                Loading, please wait...
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-200 to-blue-300 text-gray-700">
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Sr No.
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Name
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Email
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                                        Body
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((ele, i) => (
                                    <tr
                                        key={i}
                                        className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition-colors"
                                    >
                                        <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                            {i + 1}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                            {ele.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                            {ele.email}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                                            {ele.body}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Apiaxios;

import React, { useState } from "react";

const DogAPI = () => {
    const [images, setImages] = useState([]);

    const api_call = () => {
        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then((response) => response.json())
            .then((data) => {
                setImages(data.message);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col items-center py-10">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Dog Image API</h1>
            <div className="mb-8">
                <button
                    className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-transform transform hover:scale-105 text-lg"
                    onClick={api_call}
                >
                    Get Random Dog Images
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
                    >
                        <img
                            src={image}
                            alt={`Dog ${index}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h5 className="text-xl font-bold text-gray-700">Meet the Dog</h5>
                            <p className="text-gray-500 text-sm">
                                A random dog image fetched from the Dog API!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DogAPI;

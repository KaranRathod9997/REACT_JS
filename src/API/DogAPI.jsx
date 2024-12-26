

import React, { useState } from 'react';

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
        <div className="container d-flex flex-column align-items-center mt-5">
            <h1 className="mb-4">Dog Image API</h1>
            <div className="d-flex justify-content-center mb-4">
                <button
                    className="btn btn-primary btn-lg shadow-lg"
                    onClick={api_call}
                    style={{ width: '250px', fontSize: '18px' }}
                >
                    Get Random Dog Images
                </button>
            </div>


            <div className="d-flex flex-wrap justify-content-center">
                {images.map((image, index) => (
                    <div key={index} className="card shadow-lg" style={{ width: '18rem', margin: '10px', borderRadius: '10px' }}>
                        <img
                            src={image}
                            className="card-img-top"
                            alt={`Dog ${index}`}
                            style={{ borderRadius: '10px 10px 0 0' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center" style={{ fontSize: '20px' }}>Meet the Dog</h5>
                            <p className="text-center" style={{ fontSize: '14px', color: '#6c757d' }}>
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

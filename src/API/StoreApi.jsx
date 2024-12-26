import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function StoreApi() {
    const [product, setProduct] = useState(null);

    const fetchProduct = () => {
        const randomId = Math.floor(Math.random() * 20) + 1;

        fetch(`https://fakestoreapi.com/products/${randomId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={fetchProduct}
                    style={{ width: '250px', fontSize: '18px' }}
                >
                    Get New Product
                </button>
            </div>

            {product && (
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm bg-light">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="img-fluid rounded-start"
                                        style={{ objectFit: 'cover', height: '200px', maxWidth: '100%' }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: '24px' }}>
                                            {product.title}
                                        </h5>
                                        <p className="card-text" style={{ fontSize: '16px', color: '#6c757d' }}>
                                            {product.description.length > 100
                                                ? product.description.substring(0, 100) + "..."
                                                : product.description
                                            }
                                        </p>
                                        <span className="text-primary" style={{ fontWeight: 'bold', fontSize: '22px' }}>
                                            ${product.price}
                                        </span>
                                        <div className="mt-3">
                                            <button
                                                className="btn btn-success"
                                                style={{ fontSize: '14px' }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StoreApi;

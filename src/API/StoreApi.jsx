import React, { useState } from "react";

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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-10">
            <div className="mb-6">
                <button
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transform transition-transform hover:scale-105 text-lg font-semibold"
                    onClick={fetchProduct}
                >
                    Get New Product
                </button>
            </div>

            {product && (
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Product Image */}
                        <div className="flex justify-center items-center bg-gray-100 p-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-contain rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="col-span-2 p-6">
                            <h5 className="text-2xl font-bold text-gray-800 mb-4">
                                {product.title}
                            </h5>
                            <p className="text-gray-600 text-base mb-4">
                                {product.description.length > 150
                                    ? `${product.description.substring(0, 150)}...`
                                    : product.description}
                            </p>
                            <span className="text-xl font-semibold text-blue-600">
                                ${product.price}
                            </span>
                            <div className="mt-6">
                                <button
                                    className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105 text-sm font-semibold"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StoreApi;

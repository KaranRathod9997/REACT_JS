import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Counter Application</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Count Number: <span className="text-blue-500">{counter}</span>
        </h2>

        <div className="space-x-4">
          <button
            onClick={() => setCounter(counter + 1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

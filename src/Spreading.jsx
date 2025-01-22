// import React, { useState } from 'react'

// function Spreading() {

//   const [name, setName] = useState("KARAN")
//   const change = () => {
//     setName("LAXMAN")
//   }

//   // ======================== Object =============================

//   const [object, setObject] = useState({ name: "KARAN", age: 20, city: "Ahmedabad" })
//   const changeObject = () => {
//     setObject({ ...object, name: "OM", age: 21 })
//   }

//   // ========================= ArraY ============================

//   const [array, setArray] = useState([1, "KARAN", 2, "LAXMAN"])
//   const changeArray = () => {
//     setArray([...array, 3, "OM"])
//   }
//   return (
//     <><div><i>
//       <center>
//         <h3>=== Spreading Operator ===</h3><br />
//         <h4>Name : {name}</h4>
//         <button onClick={change}>Change name</button><br /><br />
//         <h3>====================</h3><br />

//         <h3>=== Change Only Name & Age In Object ===</h3><br />
//         <h4>name:{object.name} <br />
//           Age: {object.age}  <br />
//           City: {object.city}  <br />
//         </h4>
//         <button onClick={changeObject}>Change Object</button>
//         <h3>==========================</h3><br />

//         <h3>=== Add New Data In Array ===</h3>
//         <h4>{array.map((ele, index) => (
//           <p key={index}>{ele}.</p>
//         ))}
//         </h4>
//         <button onClick={changeArray}>Add_Data</button>
//         <h3>========================</h3>
//       </center></i>
//     </div>
//     </>
//   )
// }

// export default Spreading;


import React, { useState } from 'react'

function Spreading() {

  const [name, setName] = useState("KARAN");
  const change = () => {
    setName("LAXMAN");
  }

  // ======================== Object =============================
  const [object, setObject] = useState({ name: "KARAN", age: 20, city: "Ahmedabad" });
  const changeObject = () => {
    setObject({ ...object, name: "OM", age: 21 });
  }

  // ========================= ArraY ============================
  const [array, setArray] = useState([1, "KARAN", 2, "LAXMAN"]);
  const changeArray = () => {
    setArray([...array, 3, "OM"]);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <h3 className="text-2xl font-semibold text-center mb-6 text-indigo-600">=== Spreading Operator ===</h3>

        {/* Name Section */}
        <div className="mb-4">
          <h4 className="text-xl font-medium">Name: {name}</h4>
          <button
            onClick={change}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Change Name
          </button>
        </div>

        <hr className="my-6 border-t-2" />

        {/* Object Section */}
        <div className="mb-4">
          <h3 className="text-xl font-medium">=== Change Only Name & Age In Object ===</h3>
          <p className="text-lg">Name: {object.name}</p>
          <p className="text-lg">Age: {object.age}</p>
          <p className="text-lg">City: {object.city}</p>
          <button
            onClick={changeObject}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Change Object
          </button>
        </div>

        <hr className="my-6 border-t-2" />

        {/* Array Section */}
        <div className="mb-4">
          <h3 className="text-xl font-medium">=== Add New Data In Array ===</h3>
          <div>
            {array.map((ele, index) => (
              <p key={index} className="text-lg">{ele}</p>
            ))}
          </div>
          <button
            onClick={changeArray}
            className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Add Data
          </button>
        </div>

      </div>
    </div>
  )
}

export default Spreading;

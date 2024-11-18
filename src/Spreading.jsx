import React, {useState} from 'react'

function Spreading() {

  const [name,setName] = useState("KARAN")
  const change =()=>{
    setName("LAXMAN")
  }

  // ======================== Object =============================

  const[object,setObject] = useState({name:"KARAN",age:20,city:"Ahmedabad"})
  const changeObject = () =>{
    setObject({...object,name:"OM",age:21})
  }

  // ========================= ArraY ============================

  const [array,setArray] = useState([1,"KARAN",2,"LAXMAN"])
  const changeArray = () =>{
    setArray([...array,3,"OM"])
  }
  return (
    <><div><i>
      <center>
      <h3>=== Spreading Operator ===</h3><br />
      <h4>Name : {name}</h4>
      <button onClick={change}>Change name</button><br /><br />
      <h3>====================</h3><br />

      <h3>=== Change Only Name & Age In Object ===</h3><br />
      <h4>name:{object.name} <br />
          Age: {object.age}  <br />
          City: {object.city}  <br />
      </h4>
      <button onClick={changeObject}>Change Object</button>
      <h3>==========================</h3><br />

      <h3>=== Add New Data In Array ===</h3>
      <h4>{array.map((ele,index)=>(
        <p key={index}>{ele}.</p>
      ))}
      </h4>
      <button onClick={changeArray}>Add_Data</button>
      <h3>========================</h3>
      </center></i>
    </div>
    </>
  )
}

export default Spreading;

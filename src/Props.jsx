// import React from 'react'

// const Props = (Props) => {
//   return (
//     <>
//       <h1>{Props.arrray}</h1>
//       <h1>Name :{studentdata?.name}</h1>  
//       <h1>Age :{studentdata?.age}</h1>  
//       <h1>City :{studentdata?.city}</h1>  
//     </>
//   )
// }

// export default Props



// using with foreach method



import React from 'react';  

const StudentInfo = ({ array = [], studentdata }) => {  
  const subjects = [];  
  
  
  // Using forEach to push each subject into the subjects array  
  array.forEach((subject, index) => {  
    subjects.push(<h2 key={index}>{subject}</h2>);  
  });  

  return (  
    <>  
      {subjects} {/* Render the subjects */}  
      <h1>Name :{studentdata?.name}</h1>  
      <h1>Age :{studentdata?.age}</h1>  
      <h1>City :{studentdata?.city}</h1>  
    </>  
  );  
}  

export default StudentInfo;


// using with map method ///////////

// import React from 'react';  
         
// const StudentInfo = ({ array = [], studentdata }) => {  
//   return (  
//     <>  
//       {array.map((subject, index) => (  
//         <h2 key={index}>{subject}</h2> // Using map to render each subject  
//       ))}  
//       <h1>Name :{studentdata?.name}</h1>  
//       <h1>Age :{studentdata?.age}</h1>  
//       <h1>City :{studentdata?.city}</h1>  
//     </>  
//   );  
// }  

// export default StudentInfo;
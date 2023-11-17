// import React, { useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../design/login.css";
// import Student from './homepage/student';


// const Login = ({sendhide}) => {
    
//      const navigate=useNavigate();
          
//     const [hide,setHide]=useState(false);
//    const check=()=>{
//     navigate('/student');
//    }



//   return (

  

//     <form >
//     <div className="imgcontainer">
//       <img src="img_avatar2.png" alt="Avatar" className="avatar" />
//     </div>
//     <div className="form-container">
//       <label htmlFor="uname"><b>Username</b></label>
//       <input
//         type="text"
//         placeholder="Enter Username"
        
//       />
//         <label htmlFor="name"><b>Name</b></label>
//       <input
//         type="text"
//         placeholder="Enter name"
       
//       />
//         <label htmlFor="reg. no"><b>Reg.Number</b></label>
//       <input
//         type="text"
//         placeholder="Enter Registration Number "
       
//       />

// <label htmlFor="psw"><b>Hostel</b></label>
//       <input
//         type="text"
//         placeholder="Enter Hostel Name"
        
//       />

//       <label htmlFor="psw"><b>Password</b></label>
//       <input
//         type="password"
//         placeholder="Enter Password"
        
//       />

//       <button type="submit" onClick={check}>Login</button>

//       <label>
//         <input
//           type="checkbox"
          
//         />
//         Remember me
//       </label>
//     </div>

//     <div className="form-container" style={{ backgroundColor: '#f1f1f1' }}>
//       <button type="button" className="cancelbtn" onClick={()=>{setHide(!hide);
//       sendhide=hide}}>
//         Cancel
//       </button>
//       <span className="psw">
//         Forgot <a href="#">password?</a>
//       </span>
//     </div>
//    </form>
   
 



//   )
// }

// export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../design/login.css";
// import Student from './homepage/student';
import axios from 'axios';



const Login = () => {

 const [username,setUsername]=useState("");
 
 const [password,setPassword]=useState("");

 const navigate=useNavigate();

 const handleSubmit= async (e)=>{
  e.preventDefault();
  console.log(username,password);
  // toast.success('Registered Successfully')

  try {
    const res = await axios.post('/api/v1/auth/login', {
      username,
      
      password
    });
    if (res.data.success) {
        // toast.success(res.data.message);
      navigate("/");

      console.log('successful')
    } else {
      // toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    // toast.error("Something went wrong");
  }

};


 



  return (

  

    <form onSubmit={handleSubmit} >
    <div className="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" className="avatar" />
    </div>
    <div className="form-container">
      <label htmlFor="uname"><b>Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required
        
      />



      <label htmlFor="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        
      />

      <button type="submit" >LOGIN</button>

      <label>
        <input
          type="checkbox"
          value={username}
          
        />
        Remember me
      </label>
    </div>

    <div className="form-container" style={{ backgroundColor: '#f1f1f1' }}>
      <button type="button" className="cancelbtn" >
        Cancel
      </button>
      <span className="psw">
      <a href="#"> Forgot  password?</a>
      </span>
    </div>
   </form>
   
 



  )
}

export default Login
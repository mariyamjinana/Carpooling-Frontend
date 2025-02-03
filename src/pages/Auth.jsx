import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../service/allApi'

function Auth({register}) {
  const [userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })
  const navigate = useNavigate()
  // console.log(userDetails);
   
  const handleRegister = async () => {
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
        alert("Fill the form completely");
        return;
    }

    const result = await registerApi(userDetails);
    console.log("API Response:", result); 

    if (result?.status === 200) {
        alert("Registered successfully");  
        setUserDetails({
            username: "",
            email: "",
            password: ""
        })
        navigate('/login')
    } else if (result?.status === 406) {
        alert(result?.data);  
    } else {
        console.error("Unexpected response:", result);
        alert("Something went wrong");
    }
};
  return (
    <>
    <div className='mt-2 p-5'>
        <div className="container-fluid shadow">
            <div className="row">
                <div className="col-md-6 ">
                    <img src="https://cdn.dribbble.com/users/139674/screenshots/8237929/media/458959bcb72ea3e5ead844292b761731.gif" alt="" className='w-100 '/>
                </div>
                <div className="col-md-6 p-5">
                    <div className='mt-5'>
                        {!register?<h1 className='text-center text-warning fw-5'>LOGIN</h1>
                        :
                        <h1 className='text-center text-warning'>REGISTER</h1>
                      }
                      {register && <input type="text" placeholder='E-mail' className='form-control mt-3' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} />}
                        <input type="text" placeholder='Username' className='form-control mt-3' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />    
                        <input type="text" placeholder='Password' className='form-control mt-3' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
                        {!register?<div className='text-center mt-3'>
                        <button className='btn btn-warning form-control'>Login</button>
                        <p className=' mt-3'>New User?click here to <Link to={'/register'} className='text-danger'>Register</Link></p>
                        </div>
                       :
                       <div className='text-center mt-3'>
                        <button className='btn btn-warning form-control' onClick={handleRegister}>Register</button>    
                        <p className=' mt-3'>Existing User?click here to <Link to={'/login'} className='text-danger'>Login</Link></p>                   
                        </div>}
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    </>
  )
}

export default Auth
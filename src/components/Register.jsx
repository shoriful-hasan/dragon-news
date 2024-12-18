import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authcontext } from '../AuthProvider/AuthProvider';




const Register = () => {
  const navigate = useNavigate()
  const {CreateNewUser,setuser,user,User_Update_Profile} = useContext(authcontext)

const [error,seterror]  = useState({})

const Handle_New_User_Registration = (e)=>{
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get('name')
  const photo = form.get('photo')
  const email = form.get('email')
  const password = form.get('password')
  // console.log({name,photo,email,password});

// form validation error code here

if(name.length < 6){
seterror({...error,name:'character must be 6 character'})
return
}




  CreateNewUser(email,password)
    .then((result)=>{
     
      navigate('/')
      setuser(result)
      User_Update_Profile({displayName : name ,photoURL : photo})
      .then((result)=>{
        // console.log(result);
        
      })

      .catch((error)=>{
        // console.log(error.message);
        
      })
      
        
    })
    .catch((error)=>{
     console.log(error.message);
     
      
    })
  

}

    return (
        <div className="card mb-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className='text-center pt-3'><h2 className='text-2xl'>Register Your Account</h2></div>
        <form onSubmit={Handle_New_User_Registration} className="card-body ">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
          </div>
          {
            error.name && (

              <label className='text-red-500'>{error.name}</label>
            )
          }

        <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>


        <h2 className='text-center pb-3'>Already Have An account<NavLink to='/authlayout/login' className='text-red-500'>Login</NavLink></h2>

      </div>
    );
};

export default Register;
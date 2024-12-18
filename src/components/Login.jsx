import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { authcontext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {Sign_IN_User,setuser} = useContext(authcontext)
  const [error,seterror] = useState({})
const location = useLocation();
// console.log(location);

const navigate = useNavigate()
  const Handle_user_signin = (e)=>{
    e.preventDefault()
    const form = new FormData(e.target);
  const email = form.get('email')
  const password = form.get('password')
  Sign_IN_User(email,password)
  .then((result)=>{
    setuser(result);
    // console.log(result);
    
    navigate(location?.state ? location.state : '/')

  })
  .catch((error)=>{
   seterror({...error, Login:error.code})
    
  })


  // console.log({email,password});
  }


    return (
        <div>
          {/* login form design start here */}
<div className='text-center'><h2 className='text-xl'>Login Your Account</h2></div>
          <div className="card shrink-0 w-[350px] mt-3 border">
      <form onSubmit={Handle_user_signin} className="card-body">
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
          
          {
            error.Login && (
              <label className='text-red-700'>
                {error.Login}
              </label>
            )
          }

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

{/* login form design end here */}




            <h2 className='text-center'>new to this site please  <NavLink to='/authlayout/register' className='text-red-500'>Register</NavLink></h2>
        </div>
    );
};

export default Login;
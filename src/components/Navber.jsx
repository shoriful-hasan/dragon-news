import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import usericon from '../assets/user.png'
import { useContext } from 'react';
import { authcontext } from '../AuthProvider/AuthProvider';
const Navber = () => {

    const {user,Log_out_user} = useContext(authcontext)




    return (
        <div className='flex justify-between items-center'>
           <div></div>
           <div className='space-x-3'>
            <Link to='/'>Home</Link>
            <Link to='/simple'>About</Link>
            <Link to='/'>Career</Link>
            <Link>User name is {user?.email}</Link>
           </div>
           <div className='flex gap-2'>
           {
           user && user?.email ? 
           (<div>
            <img src={user?.photoURL} alt="" />
            <p>{user.displayName}</p>

           </div>) 
           : 
           
           ( <img src={usericon} alt="" />) 
           
           }
           
      <div>
        {
            user && user?.email ? <button onClick={Log_out_user}>Logout</button> : <NavLink to='/authlayout/login' className='btn btn-neutral'>Login</NavLink>
        }
      </div>

           </div>
        </div>
    );
};

export default Navber;
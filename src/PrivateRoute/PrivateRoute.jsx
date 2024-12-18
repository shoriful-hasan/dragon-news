import React, { useContext } from 'react';
import { authcontext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({Newsshow}) => {

    const {user,loading} = useContext(authcontext)
    const location = useLocation();

    // console.log(location);

if(loading){
    return <div className='flex justify-center items-center h-48 '>
        <span className="loading loading-bars loading-lg"></span>
    </div>
}

    if(user){
        return Newsshow
    }

    return <Navigate state={location.pathname} to={'/authlayout/login'}></Navigate>
};

export default PrivateRoute;
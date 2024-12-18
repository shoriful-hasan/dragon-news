import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const Authlayout = () => {
    return (
        <div className='w-11/12 mx-auto mt-2'>
            <Navber></Navber>
            <div className='  flex justify-center mt-8 w-full'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Authlayout;
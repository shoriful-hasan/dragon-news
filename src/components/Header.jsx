import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <div className='flex flex-col  items-center'>
                <div><img src={logo} alt="" /></div>
                <div><h2 className='text-gray-500 '>Journalism Without Fear or Favour</h2></div>
                <div>
                    <p>{
                        moment().format('dddd MMMM Do YYYY ')
                        
                        }</p>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
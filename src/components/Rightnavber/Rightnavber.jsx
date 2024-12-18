import React from 'react';
import SocialLogin from '../SocialLogin';
import Findus from '../Findus';

const Rightnavber = () => {
    return (
        <div>
            <h2>Login with</h2>
            <div className='space-y-2'>
                <SocialLogin></SocialLogin>
                <Findus></Findus>
            </div>
        </div>
    );
};

export default Rightnavber;
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2'>
            <p className='bg-red-300 p-2'>Latest</p>
        <Marquee pauseOnHover={true}>
      <Link to='/simple'>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas quidem deserunt blanditiis sed consequuntur modi voluptate optio facere molestias, harum, deleniti inventore totam excepturi error at fuga earum nobis!</p>
      </Link>
        </Marquee>
        </div>
    );
};

export default LatestNews;
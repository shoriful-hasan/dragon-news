import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Simple from '../components/Simple';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';
import Leftcategory from '../components/Leftcategory/Leftcategory';
import Rightnavber from '../components/Rightnavber/Rightnavber';


const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
             <section className='w-11/12 mx-auto bg-gray-300 px-2 py-1'>
                <LatestNews></LatestNews>
             </section>
                </header>
{/* this is navber main container */}
            <nav>

                <div className='mt-8 border w-11/12 mx-auto'>
                <Navber></Navber>
                </div>
            </nav>

            <main className='w-11/12 mx-auto grid grid-cols-12 mt-5 gap-2 text-center'>
          <aside className='col-span-3'><Leftcategory></Leftcategory></aside>
          <div className='col-span-6'><Outlet></Outlet></div>
          <aside className='col-span-3'><Rightnavber></Rightnavber></aside>
            </main>
        </div>
    );
};

export default HomeLayout;
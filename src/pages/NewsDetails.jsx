import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Navber from '../components/Navber';
import Rightnavber from '../components/Rightnavber/Rightnavber';

const NewsDetails = () => {

const News_Data = useLoaderData()
const data = News_Data.data[0]
console.log(data);


    return (
        <div>
            <header>
                <Header></Header>
            </header>
<section className='w-11/12 border mx-auto'>
<nav><Navber></Navber></nav>
</section>


<main className='w-11/12 mt-3 mx-auto grid grid-cols-12 gap-2'>
<section className='col-span-9 border'>
<div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={data?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.details}</p>
    <div className="card-actions">
      
      <Link className="btn btn-primary" to='/'>All news in this category</Link>
    </div>
  </div>
</div>



</section>
<aside className='col-span-3 border'><Rightnavber></Rightnavber></aside>
</main>


        </div>
    );
};

export default NewsDetails;
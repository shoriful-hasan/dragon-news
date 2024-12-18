import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newacard from '../components/Newacard';

const CategoryNews = () => {
    const {data : news} = useLoaderData();
    // console.log(news);
    
    return (
        <div>
          
         <div>
            {
                news.map(singlenews => <Newacard news ={singlenews}></Newacard>)
            }
         </div>
        </div>
    );
};

export default CategoryNews;
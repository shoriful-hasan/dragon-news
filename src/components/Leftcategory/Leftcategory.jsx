import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftcategory = () => {

const [category,setcategory] =  useState([])
// console.log(category);

useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => setcategory(data.data.news_category)
)
},[])




    return (
        <div>
            <h2>log to trip{category.length}</h2>
            <div className="flex flex-col gap-3 mt-2">
                {category.map(cate => 
                    
                    <NavLink to={`/category/${cate.category_id}`} className="btn btn-success" key={cate.category_id}> {cate.category_name}</NavLink>
                    
                )
                    }

                    
            </div>
        </div>
    );
};

export default Leftcategory;
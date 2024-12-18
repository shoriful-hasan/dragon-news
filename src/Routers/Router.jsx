import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Simple from "../components/Simple";
import CategoryNews from "../pages/CategoryNews";
import Authlayout from "../Layout/Authlayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routerprovided = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout></HomeLayout>,
        children :[
         {
            path : '/',
            element : <Navigate to={'/category/01'}></Navigate>

         },
         
            {
            path : 'category/:id',
            element : <CategoryNews></CategoryNews>,
            loader : ({params})=> 
                fetch (`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
    ]
      
    },

{
    path : '/news/:id',
    element :<PrivateRoute Newsshow={<NewsDetails></NewsDetails>}></PrivateRoute>,
    loader : ({params})=>
        fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
},


    {
       path : '/authlayout',
       element : <Authlayout></Authlayout>,
       children :[
        {
            path :'/authlayout/login',
            element :<Login></Login>
        },
        {
            path : '/authlayout/register',
            element : <Register></Register>
        }
    ]
    },
    {
        path : '*',
        element : 'error'
    }

])


export default routerprovided
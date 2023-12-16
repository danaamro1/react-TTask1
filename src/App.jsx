import { RouterProvider} from "react-router-dom";
import { CartContext, CartContextProvider } from "./components/web/context/cart.jsx";
import { UserContext, UserContextProvider } from "./components/web/context/User.jsx";
import {router} from './components/layout/routes.jsx';
import { useContext, useEffect } from "react";


/*import Layout from"./components/layout/Layout.jsx";
import Register from "./components/web/register/Register.jsx";
import Login from "./components/web/login/Login.jsx";
import Home from "./components/web/home/Home.jsx";
import Categories from "./components/web/catigores/Catigores.jsx";
import Dashboardlayout from './components/layout/Dashboardlayout.jsx';
import HomeDashboard from './components/dashbord/home/Home.jsx';
import CategoriesDashboard  from './components/dashbord/catigores/Catigores.jsx';
import { createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import CategDetles from "./components/web/catigores/CategDetles.jsx";
import Product from "./components/web/product/Product.jsx";

import Cart from "./components/web/cart/Cart.jsx";
import Prof from "./components/web/profile/Prof.jsx";
*/

export default function App() {
  let {setUserToken}=useContext(UserContext);

  let{count,getcount,getCartContext,setCount}= useContext(CartContext);

  useEffect(()=>{
    if(localStorage.getItem("userToken")!=null){
      setUserToken(localStorage.getItem("userToken"));
      setCount(getCartContext().count);
    }
  },[])



  return (
   
   
   
     

       <RouterProvider router={router} />
  
    
   
   
  )
}

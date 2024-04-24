import React, { Children, StrictMode } from "react";
import  ReactDOM  from "react-dom";
import   App   from "./App";
import Menu from "./Menu";
import FAQ from "./FAQ";
import Blog from "./Blog";
import Shop from "./Shop";
import {
  BrowserRouter,
  HashRouter,
    createBrowserRouter,
    RouterProvider,
    createHashRouter
  } from "react-router-dom";
import Chefs from "./Chefs";
import More from "./more";
import Appp from './Shop';
import Contextt from "./Contextt";
import Bout from "./Bout";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Signup from "./Signup";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path:"Menu",
        element:<Menu/>
    },
    {
      path:"Chefs",
      element:<Chefs/> 
    },
    {
      path:"Faq",
      element:<FAQ/>
    },
    {
     path:"Blog",
     element:<Blog/>
    },
    {
     path:"Shop",
     element:<Shop/>,
      
    },
    {
      path:"Bout",
      element:<Bout/>,
     },
     {
      path:"Cart",
      element:<Cart/>
     },
     {
      path:"Checkout",
      element:<Checkout/>
     },
     {
      path:"Sign",
      element:<Signup/>
     },
    { 
      path:"/More/:id",
      element:<More/>, 
     },
    
  ]);
ReactDOM.render(
<>  
    
    <Contextt>
    <RouterProvider router={router} />
    </Contextt>
  
     
</>
,document.getElementById('root')
)

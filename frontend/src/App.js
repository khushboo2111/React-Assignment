
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from './components/getUser/User';
import './components/getUser/user.css'
import Add from "./components/addUser/Add";
import Edit from "./components/updateUser/Edit";

function App() {

  const route = createBrowserRouter([
 
    {
      path : "/",
      element : <User/>,
    },
    {
        path : "/add",
        element : <Add/>
    },
    {
        path : "/edit",
        element : <Edit/>,
    },
    
  ])

  return (
<div> 
 <RouterProvider router = {route} ></RouterProvider>
</div>
  )
}

export default App;

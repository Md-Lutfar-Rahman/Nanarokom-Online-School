import { createBrowserRouter } from "react-router-dom";
import Master from "../Layout/Master";
import Home from "../Components/Home/Home";
import Login from "../Auth/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Master/>,
    children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
            path: '/login',
            element: <Login/>
          },
          {
            path: '/dashboard',
            element: (
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
                
              
            ),
          },
    ]
  },
]);



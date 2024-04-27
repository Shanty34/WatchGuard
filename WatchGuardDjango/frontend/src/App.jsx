import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Dashboard/Home";
import MainLayout from "./Pages/More/MainLayout";
import Monitoring from "./Pages/Monitoring/Monitoring";
import Monitor from "./Pages/Monitoring/Monitor";
export default function App(){
    const router = createBrowserRouter([
        {
          path:"/",
          element:<MainLayout/>,
          children:[
            {
              path: "/",
              element: <Home/>,
            },
            {
              path: "/monitor",
              element:<Monitor/>,
              children:[
                {
                  
                  path:"/monitor/:Slugs",
                  element:<Monitoring/>
                }
              ]
            },
            // {
            //   path: "/about",
            //   element: <About/>,
            // },
            
         
          ]
        },
      ]);
      return (
        <div className="">
          <RouterProvider router={router}/>
        </div>
      )
}
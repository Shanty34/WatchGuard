import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Dashboard/Home";
import MainLayout from "./Pages/More/MainLayout";
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
            // {
            //   path: "/Search",
            //   element: <SearchPage/>,
            // },
            // {
            //   path: "/about",
            //   element: <About/>,
            // },
            
         
          ]
        },
      ]);
      return (
        <div className="App">
          <RouterProvider router={router}/>
        </div>
      )
}
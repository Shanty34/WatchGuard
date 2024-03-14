import { Outlet, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { buttonVariants } from "@/components/ui/button"

import { Link } from 'react-router-dom'
import { ExclamationTriangleIcon, HomeIcon } from '@radix-ui/react-icons'
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [allert,setAlert]=useState(false)
  const location = useLocation();

  const isButtonActive = (to) => {
    return location.pathname === to;
  };

    // Reset the alert when the route changes
    useEffect(() => {
      setAlert(false);
    }, [location.pathname]);
  

  return (
    <div className="bg-gray-8 text-gray-5 flex">
      <div className='bg-gray-7 h-[100vh] py-12 border-e-2 w-52'>
        <h1 className='text-2xl font-bold text-center py-6'>LOGO!</h1>
        <div className='grid grid-flow-row gap-4'>
          <Link to="/" className={buttonVariants({ variant: "outline", size: "lg" })}><HomeIcon /> Dashboard</Link>
          <Link to="/monitor" className={buttonVariants({ variant: "outline", size: "lg" })}><PiTelevisionSimpleFill /> Monitoring</Link>
          <button onClick={()=>setAlert(!allert)} className={buttonVariants({ variant: "outline", size: "lg" })}><ExclamationTriangleIcon /> Alerts</button>
        </div>
        {/* Conditionally render the block next to the nav menu */}
        
        {/* {isButtonActive("/monitor") && (
          <div className="bg-blue-500 text-white p-2 mt-4">You are on the Monitoring page</div>
        )}
        Add more conditions for other pages as needed */}
      </div>
      {isButtonActive("/") && (
          <div className="bg-gray-7 w-96 h-[100vh]">You are on the Dashboard page</div>
        )}
        {isButtonActive("/monitor") && (
          <div className="absolute right-0 bg-gray-7 w-96 h-[100vh]">You are on the Monitor page</div>
        )}
        {allert && (
          <div className="absolute left-52 bg-gray-7 w-96 h-[100vh]">Alert on</div>
        )}
      <div className="py-0">
        <Outlet />
      </div>
      <HoverCard>
        <HoverCardTrigger className="absolute right-5 top-5 flex cursor-pointer items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          User_Name
        </HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default MainLayout;

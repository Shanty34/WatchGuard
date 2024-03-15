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
import { Dash_Card, Mon_Card } from "../../components/Card";
import { Camera } from "../../assets/Camera";
import { useDashboardContext } from "../Dashboard/DashboardContext";

const MainLayout = () => {
  const [allert, setAlert] = useState(false)
  const location = useLocation();
  const [Active, setActive] = useState(false)
  const isButtonActive = (to) => {
    return location.pathname === to;
  };

  // Reset the alert when the route changes
  useEffect(() => {
    setAlert(false);

    const isMonitorPage = window.location.pathname.includes("/monitor");
    setActive(isMonitorPage);

  }, [location.pathname]);

  const { cameraVisibility, toggleCameraVisibility } = useDashboardContext();
  return (
    <div className="bg-gray-9 text-gray-5 flex">
      <div className='bg-gray-7 h-[100vh] py-12 border-e-2 w-52'>
        <h1 className='text-2xl font-bold text-center py-6'>LOGO!</h1>
        <div className='grid grid-flow-row gap-4'>
          <Link to="/" className={buttonVariants({ variant: "outline", size: "lg",className:"flex gap-2" })}><HomeIcon /> Dashboard</Link>
          <Link to="/monitor" className={buttonVariants({ variant: "outline", size: "lg",className:"flex gap-2"  })}><PiTelevisionSimpleFill /> Monitoring</Link>
          <button onClick={() => setAlert(!allert)} className={buttonVariants({ variant: "outline", size: "lg" ,className:"flex gap-2" })}><ExclamationTriangleIcon /> Alerts</button>
        </div>
        {/* Conditionally render the block next to the nav menu */}

        {/* {isButtonActive("/monitor") && (
          <div className="bg-blue-500 text-white p-2 mt-4">You are on the Monitoring page</div>
        )}
        Add more conditions for other pages as needed */}
      </div>
      {isButtonActive("/") && (
        <div className="bg-gray-7 w-96 h-[100vh]">
          {cameraVisibility.map((camera) => (
            <Dash_Card 
            key={camera.slugs} 
            slugs={camera.slugs} 
            Area={camera.Area} 
            isVisible={camera.isVisible}
            />
          ))}
        </div>
      )}
      {Active && (
        <div className="absolute right-0 bg-gray-7 w-96 h-[100vh] pt-24">
          {Camera.map(data => {
            return (
              <Mon_Card
                {...data}
              />
            )
          })}
        </div>
      )}
      {allert && (
        <div className="absolute left-52 p-12 text-lg font-semibold divide-y divide-gray-4 bg-gray-7 w-96 h-[100vh]">
          <h1 className="text-center py-6 flex gap-4 place-items-center"><ExclamationTriangleIcon className="text-semantics-3 font-extrabold scale-150"/>Alert ON</h1>
          <li className="py-4">
            {}
          </li>
        </div>
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

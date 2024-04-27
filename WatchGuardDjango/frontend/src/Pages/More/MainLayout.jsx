import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { buttonVariants } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { ExclamationTriangleIcon, HomeIcon } from "@radix-ui/react-icons";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { RiSettings4Fill } from "react-icons/ri"
import { useEffect, useState } from "react";
import { Dash_Card, Mon_Card } from "../../components/Card";
import { Camera } from "../../assets/Camera";
import { useDashboardContext } from "../Dashboard/DashboardContext";
import { Toaster, toast } from "sonner";
import Toast from "../../components/Toast";
import { Badge } from "../../components/ui/badge";
import { Button, Card, CardBody, CardFooter, Dialog, IconButton, Select, Switch, Typography ,Option} from "@material-tailwind/react";

const MainLayout = () => {
  const [allert, setAlert] = useState(false);
  const location = useLocation();
  const [Active, setActive] = useState(false);
  const isButtonActive = (to) => {
    return location.pathname === to;
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  // Reset the alert when the route changes
  useEffect(() => {
    setAlert(false);

    const isMonitorPage = window.location.pathname.includes("/monitor");
    setActive(isMonitorPage);
  }, [location.pathname]);

  const { cameraVisibility, toggleCameraVisibility } = useDashboardContext();
  return (
    <div className="bg-gray-9 text-gray-5 flex">
      <div className="fixed left-0 z-10 bg-gray-7 h-[100vh] py-12 px-4 border-e-2 w-52">
        <img src="https://cdn-icons-png.flaticon.com/512/4017/4017956.png" />
        <h1 className="text-2xl font-bold text-center py-6">WatchGuard</h1>
        <div className="grid grid-flow-row gap-4">
          <Link
            to="/"
          >
            <Button className="flex w-full place-items-center gap-2 text-gray-5 outline outline-1 outline-gray-5"
              variant="outlined"
              size="lg">
              <HomeIcon /> Dashboard
            </Button>
          </Link>
          <Link
            to="/monitor"
          >
            <Button className="flex w-full place-items-center gap-2 text-gray-5 outline outline-1 outline-gray-5"
              variant="outlined"
              size="lg">
              <PiTelevisionSimpleFill /> Monitoring
            </Button>
          </Link>
          {/* <button onClick={() => setAlert(!allert)} className={buttonVariants({ variant: "outline", size: "lg" ,className:"flex gap-2" })}><ExclamationTriangleIcon /> Alerts</button> */}
        </div>
        {/* Conditionally render the block next to the nav menu */}

        {/* {isButtonActive("/monitor") && (
          <div className="bg-blue-500 text-white p-2 mt-4">You are on the Monitoring page</div>
        )}
        Add more conditions for other pages as needed */}
      </div>
      {isButtonActive("/") && (
        <div className="overflow-y-scroll pl-48 bg-gray-7 w-full min-h-screen">
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
        <div className="absolute right-0 bg-gray-7 w-72 h-[100vh] pt-24">
          {Camera.map((data) => {
            return <Mon_Card {...data} />;
          })}
        </div>
      )}
      {allert && (
        <div className="absolute left-44 p-12 text-lg font-semibold divide-y divide-gray-4 bg-gray-7 w-72 h-[100vh]">
          <h1 className="text-center py-6 flex gap-4 place-items-center">
            <ExclamationTriangleIcon className="text-semantics-3 font-extrabold scale-150" />
            Alert ON
          </h1>
          <li className="py-4">{ }</li>
        </div>
      )}
      <div className="py-0">
        <Outlet />
      </div>
      <div className="z-10 fixed top-5 right-5 flex place-items-center gap-2">
        <IconButton variant="gradient" className="rounded-full" onClick={handleOpen}>
          <RiSettings4Fill className="scale-150" />
        </IconButton>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[50vw]">
            <CardBody className="grid grid-flow-col gap-4 h-[60vh]">
              <div className="flex flex-col gap-2"> 
              <Button>Cam 1</Button>
              <Button>Cam 1</Button>
              <Button>Cam 1</Button>
              <Button>Cam 1</Button>
              <Button>Cam 1</Button>
              <Button>Cam 1</Button>
              </div>
              <hr className="outline outline-1 h-full mx-4"></hr>
              <div>
                <Typography variant="h4">Settings.</Typography>
                <div className="grid grid-cols-2 gap-x-44 gap-y-6">
                  <Typography variant="h6">Criminal Detection</Typography>
                  <Switch color="blue"/>
                  <Typography variant="h6">Fire Detection</Typography>
                  <Switch color="red"/>
                  <Typography variant="h6">Trespassing Detection</Typography>
                  <Switch color="yellow"/>
                  <Typography variant="h6">Smoking Detection</Typography>
                  <Switch color="blue"/>
                  <div>
                    <Typography variant="h6">Object Detection</Typography>
                    <Select label="Select Object">
                      <Option>Camera</Option>
                      <Option>Weapon</Option>
                    </Select>
                  </div>
                  <Switch color="blue"/>

                </div>
              </div>
              
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleOpen} color="green" size="lg" className="tracking-widest" fullWidth>Save</Button>
            </CardFooter>
          </Card>
        </Dialog>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-gray-10">CN</AvatarFallback>
        </Avatar>
        <Badge variant="outline" className="text-md text-gray-2">Security Dashboard</Badge>
      </div>
      <Toast />
    </div>
  );
};

export default MainLayout;

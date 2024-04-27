import React from "react";

import { Badge } from "@/components/ui/badge";
import { CameraIcon } from "@radix-ui/react-icons";
import { useDashboardContext } from "../Pages/Dashboard/DashboardContext";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Switch } from "@material-tailwind/react";

export function Dash_Card(props) {
  const { cameraVisibility, toggleCameraVisibility } = useDashboardContext();

  const handleToggleVisibility = () => {
    toggleCameraVisibility(props.slugs);
  };

  return (
    <div className="grid grid-flow-col place-items-center gap-2 py-2 px-2 hover:bg-gray-6">
      <div className="w-24 rounded-lg bg-base-accent aspect-square grid place-items-center scale-75">
        <CameraIcon className="scale-150" />
      </div>
      <div>
        <h1 className="text-lg">{props.slugs}</h1>
        <Badge className="border-0 px-2 text-sm letter-2">{props.Area}</Badge>
      </div>
      {/* Use Switch component and handleSwitchClick function */}
      <Switch color="blue" onClick={handleToggleVisibility}  />
    </div>
  );
}
export function Mon_Card(props) {
  return (
    <Link to={`/monitor/${props.slugs}`}>
      <div className="grid grid-flow-col gap-2 py-2 px-4 hover:bg-gray-6">
        <div className="w-16 rounded-3xl bg-base-accent aspect-square grid place-items-center">
          <CameraIcon className="scale-150" />
        </div>
        <div>
          <h1 className="text-md">{props.slugs}</h1>
          <Badge className="border-0 px-5 text-sm">{props.Area}</Badge>
        </div>
      </div>
    </Link>
  );
}
export function Dash_Cam(props) {
  return (
    <div>
      {props.isVisible && (
        <Link to={`/monitor/${props.slugs}`}>
              <div className="aspect-video bg-gray-6 rounded-xl p-24 grid place-items-center">
                <CameraIcon className="scale-150" />
              </div>
              {/* Trigger changes the variant of badge to destructive */}
              <Badge variant="outline" className="text-sm text-gray-5">
                {props.Area}
              </Badge>
        </Link>
      )}
    </div>
  );
}

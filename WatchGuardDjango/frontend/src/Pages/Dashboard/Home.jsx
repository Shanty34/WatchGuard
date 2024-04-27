import React from "react";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { useDashboardContext } from "./DashboardContext";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";
import { CameraIcon } from "@radix-ui/react-icons";
import { Badge } from "../../components/ui/badge";
import { Camera } from "../../assets/Camera";
import { Dash_Cam } from "../../components/Card";

export default function Home() {
  const { cameraVisibility } = useDashboardContext();

  return (
    <div className="grid grid-cols-3 py-12 px-12 place-items-center w-[70vw] min-h-screen">
      {cameraVisibility.map((camera) => (
        <Dash_Cam 
          key={camera.slugs}
          slugs={camera.slugs}
          Area={camera.Area}
          isVisible={camera.isVisible}
        />
      ))}
    </div>
  );
}

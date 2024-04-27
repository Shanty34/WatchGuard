import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../../components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FaWhatsapp } from "react-icons/fa";
import VideoFeed from "../../components/VideoFeed";
import axios from "axios";
import { useDashboardContext } from "../Dashboard/DashboardContext";

export default function Monitoring() {
  const {Alert,handleAlert}=useDashboardContext();
  function handleClick() {
    axios.get("http://localhost:8000/inform/");
  }
  return (
    <div className="grid place-items-center w-screen min-h-screen">
      <div className="grid grid-row-2 gap-24 place-items-center">

        <div className="bg-gray-6 aspect-video w-[50vw]">
          {/* <img src="http://localhost:8000/video_feed" alt="" /> */}
          <VideoFeed />
        </div>

        <div className="">
          <AlertDialog className="bg-gray-9">
            {!Alert && (
                <Button size="lg" variant={"disabled"} className="">
                  Report Crime !
                </Button>
            )}
            {Alert && (
              <AlertDialogTrigger asChild>
                <Button size="lg" variant={"alert"} className="">
                  Report Crime !
                </Button>
              </AlertDialogTrigger>
            )}
            <AlertDialogContent className="bg-gray-7 text-gray-5">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex place-items-center gap-4">
                  <div className="border-2 border-gray-5 rounded-full p-4">
                    <ExclamationTriangleIcon className="text-semantics-3 scale-150" />
                  </div>{" "}
                  Report Crime Detected !
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Remember, Reporting the Crime in time is essential for safety
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex gap-2 place-items-center">
                <AlertDialogCancel className="hover:bg-gray-5 bg-transparent hover:text-gray-10">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClick}
                  className="bg-semantics-1 flex gap-2"
                >
                  <FaWhatsapp className="scale-150" />
                  Inform Police
                </AlertDialogAction>
                <AlertDialogAction
                  onClick={handleClick}
                  className="bg-semantics-2 flex gap-2"
                >
                  <FaWhatsapp className="scale-150" />
                  Inform Building Members
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

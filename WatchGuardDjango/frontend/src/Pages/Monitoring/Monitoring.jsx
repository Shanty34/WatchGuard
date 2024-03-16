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

export default function Monitoring() {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="grid grid-row-2 place-items-center w-[80vw] h-[100vh]">
      <div className="bg-gray-6 aspect-video w-[44vw]">
        <img src="http://localhost:8000/video_feed" alt="" />
      </div>
      <div className="">
        <AlertDialog className="bg-gray-9">
          {isActive && (
            <AlertDialogTrigger asChild>
              <Button
                variant="secondary"
                size="lg"
                className="py-6 bg-semantics-3 text-lg text-semantics-2 font-bold"
              >
                Report Crime !
              </Button>
            </AlertDialogTrigger>
          )}
          {!isActive && (
            <AlertDialogTrigger asChild>
              <Button
                disabled
                size="lg"
                className=" text-lg py-6 bg-gray-6 font-bold"
              >
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
              <AlertDialogCancel className="hover:bg-gray-5 hover:text-gray-10">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className="bg-semantics-1 flex gap-2">
                <FaWhatsapp className="scale-150" />
                Inform Police
              </AlertDialogAction>
              <AlertDialogAction className="bg-semantics-2 flex gap-2">
                <FaWhatsapp className="scale-150" />
                Inform Building Members
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

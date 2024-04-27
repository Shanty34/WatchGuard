import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { useDashboardContext } from "../Pages/Dashboard/DashboardContext";

function Toast(props) {
  const handleReportClick = () => {
    window.location.href = `/monitor/${props.slugs}`;
    toast.dismissAll(); // Dismiss the toast after clicking the button
  };

  const [alert, setAlert] = useState("");
  const{handleAlert}=useDashboardContext();

  const checkAlert = () => {
    axios.get("http://localhost:8000/alert/").then((res) => {
      console.log(res.data);
      handleAlert()
      const response = res.data.status;
      if (response === 1) {
        clearInterval(intervalId); // Stop the interval
        clearInterval(intervalId); // Stop the interval
        setAlert(response);
        toast("Threat Detected!", {
          description: alert,
          icon: "⚠️",
          // Action button to report
          action: {
            label: "Report",
            onClick: handleReportClick,
          },
        });
        // updateLogFile(); // Update the log file
      }
    });
  };

  // Call the function to check the alert periodically
  const intervalId = setInterval(checkAlert, 5000); // Check every second

  // const updateLogFile = () => {
  //   axios
  //     .post("http://localhost:8000/log/", { message: "Alert triggered" })
  //     .then((res) => {
  //       console.log("Alert logged on the server");
  //     })
  //     .catch((err) => {
  //       console.error("Error logging alert on the server:", err);
  //     });
  // };

  return (
    <div>
      <Toaster />
    </div>
  );
}

export default Toast;

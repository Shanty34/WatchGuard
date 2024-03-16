import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

function Toast(props) {
  const handleReportClick = () => {
    window.location.href = `/monitor/${props.slugs}`;
    toast.dismissAll(); // Dismiss the toast after clicking the button
  };

  const [alert, setAlert] = useState("");

  const checkAlert = () => {
    axios.get("http://localhost:8000/alert/").then((res) => {
      console.log(res.data);
      const response = res.data.status;
      if (response === 1) {
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
      }
    });
  };

  // Call the function to check the alert periodically
  const intervalId = setInterval(checkAlert, 1000); // Check every second

  return (
    <div>
      <Toaster />
    </div>
  );
}

export default Toast;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";

function Toast(props) {
  const handleReportClick = () => {
    window.location.href = `/monitor/${props.slugs}`;
    toast.dismissAll(); // Dismiss the toast after clicking the button'
  };
  const [alert, setalert] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          axios.get("http://localhost:8000/alert/").then((res) => {
            console.log(res.data);
            const response = res.data;
            setalert(response);
          });
          toast(alert, {
            description: props.message,
            icon: "⚠️",
            // Action button to report
            action: {
              label: "Report",
              onClick: handleReportClick,
            },
          });
        }}
      >
        Toast
      </button>
      <Toaster />
    </div>
  );
}

export default Toast;

import React, { useEffect, useState } from "react";
import axios from "axios";

function VideoFeed() {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      //Get video feed from django URL
      const response = await fetch("http://localhost:8000/video_feed/", {
        responseType: "blob",
      });

      setImageUrl(response.url);
      console.log(response);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  //On load start fetching camera feed
  // window.addEventListener("load", () => fetchData());

  return (
    <div>
      <img src={imageUrl} alt="Streamed Image" />
    </div>
  );
}

export default VideoFeed;

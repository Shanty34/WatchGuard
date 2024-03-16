import React, { createContext, useContext, useState } from 'react';
import { Camera } from '../../assets/Camera';

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [cameraVisibility, setCameraVisibility] = useState(Camera);

  const toggleCameraVisibility = (slug) => {
    setCameraVisibility((prevVisibility) =>
      prevVisibility.map((camera) =>
        camera.slugs === slug ? { ...camera, isVisible: !camera.isVisible } : camera
      )
    );
  };

  return (
    <DashboardContext.Provider value={{ cameraVisibility, toggleCameraVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
};

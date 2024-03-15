import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(prevState => !prevState);
  };

  return (
    <DashboardContext.Provider value={{ isComponentVisible, toggleComponentVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
};

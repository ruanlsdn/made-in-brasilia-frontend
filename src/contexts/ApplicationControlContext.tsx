import React, { createContext, useContext, useState } from "react";
import { Location } from "react-router-dom";

type ApplicationControlContextProps = {
  previousLocation: Location | null;
  setPreviousLocation: React.Dispatch<React.SetStateAction<Location | null>>;
};

const ApplicationControlContext = createContext<ApplicationControlContextProps>(
  {
    previousLocation: null,
    setPreviousLocation: () => {},
  }
);

type ChildrenProps = {
  children: React.ReactNode;
};

export const ApplicationControlProvider = ({ children }: ChildrenProps) => {
  const [previousLocation, setPreviousLocation] = useState<Location | null>(
    null
  );

  return (
    <ApplicationControlContext.Provider
      value={{
        previousLocation,
        setPreviousLocation,
      }}
    >
      {children}
    </ApplicationControlContext.Provider>
  );
};

export const useApplicationControlContext = () =>
  useContext(ApplicationControlContext);

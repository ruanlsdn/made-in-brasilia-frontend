import React, { createContext, useContext, useState } from "react";

type ApplicationControlContextProps = {
  isSnackbarOpen: boolean;
  setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarMessage: string;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
  snackbarSeverity: "success" | "warning" | "error" | undefined;
  setSnackbarSeverity: React.Dispatch<
    React.SetStateAction<"success" | "warning" | "error" | undefined>
  >;
};

const ApplicationControlContext = createContext<ApplicationControlContextProps>(
  null!
);

type ChildrenProps = {
  children: React.ReactNode;
};

export const ApplicationControlProvider = ({ children }: ChildrenProps) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "warning" | "error" | undefined
  >(undefined);

  return (
    <ApplicationControlContext.Provider
      value={{
        isSnackbarOpen,
        setIsSnackbarOpen,
        snackbarMessage,
        setSnackbarMessage,
        snackbarSeverity,
        setSnackbarSeverity,
      }}
    >
      {children}
    </ApplicationControlContext.Provider>
  );
};

export const useApplicationControlContext = () =>
  useContext(ApplicationControlContext);

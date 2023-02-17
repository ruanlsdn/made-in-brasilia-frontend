import React from "react";
import { useAuthControlContext } from "../../contexts/AuthControlContext";
import { Home } from "../../pages";

type ProtectedLayoutProps = {
  children: JSX.Element;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { user } = useAuthControlContext();

  if (!user) {
    return <Home />;
  }

  return children;
};

export default ProtectedLayout;

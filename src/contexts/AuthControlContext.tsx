import React, { createContext, useContext, useEffect, useState } from "react";
import { iLoginDto } from "../interfaces/iLoginDto";
import { iUser } from "../interfaces/iUser";
import { findUniqueUserRequest, loginRequest } from "../services/api";

type AuthControlContextProps = {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  signIn: (dto: iLoginDto) => Promise<boolean>;
  signOut: () => void;
};

const AuthControlContext = createContext<AuthControlContextProps>(null!);

type ChildrenProps = {
  children: React.ReactNode;
};

export const AuthControlProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const validadeUser = async () => {
    const userId = localStorage.getItem("user");
    if (userId) {
      try {
        const response = await findUniqueUserRequest(userId);
        if (response.status == 200) setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const signIn = async (dto: iLoginDto) => {
    try {
      const response = await loginRequest(dto);
      if (response.status == 201) {
        setUser(response.data);
        localStorage.setItem("user", response.data.id);
        return true;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const signOut = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    validadeUser();
  }, []);

  return (
    <AuthControlContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthControlContext.Provider>
  );
};

export const useAuthControlContext = () => useContext(AuthControlContext);

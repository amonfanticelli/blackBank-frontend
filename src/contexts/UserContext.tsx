import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler } from "react-hook-form";
import { UserProps, UserProviderData } from "../interfaces";

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);
export const UserProvider = ({ children }: UserProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

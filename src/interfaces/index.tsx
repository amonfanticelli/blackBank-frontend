import { ReactNode } from "react";

export interface UserProps {
  children: ReactNode;
}

export interface UserProviderData {}

export interface IUserLogin {
  username: string;
  password: string;
}

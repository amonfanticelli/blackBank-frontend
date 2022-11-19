import { ReactNode } from "react";

export interface UserProps {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  username: string;
  password: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}
export interface ICreateTransaction {
  usernameCredited: string;
  value: number;
}

export interface IListTransctions {
  id?: string;
  value: number;
  createdAt: Date;
}

export interface ITransactions {
  id?: string;
  value: number;
  createdAt: string;
  type: string;
}
export interface IAccount {
  id?: string;
  balance: number;
}

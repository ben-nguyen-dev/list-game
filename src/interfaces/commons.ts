import { ReactNode } from "react";

export interface Route {
  path: string;
  name: string;
  component: ReactNode;
  exact: boolean;
}

export interface MenuType {
  label: string;
  path: string;
  children?: MenuType[];
}

import { FC } from "react";

export enum AlertTypes {
    Danger = "danger",
    Success = "success",
    Warning = "warning",
}

export interface Route {
    path: string;
    name: string;
    component: FC;
    exact: boolean;
}
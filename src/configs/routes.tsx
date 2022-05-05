import { ROUTES } from "../ultis/constants";
import { Route } from "../interfaces/commons";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));

export const routes: Route[] = [
  {
    path: ROUTES.HOME,
    name: "Home",
    component: <Home />,
    exact: true,
  },
  {
    path: ROUTES.BLANK,
    name: "Blank",
    component: <Home />,
    exact: true,
  },
];

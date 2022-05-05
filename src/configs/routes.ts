import { ROUTES } from "../ultis/constants";
import { Route } from "../interfaces/commons";
import Home from "../pages/Home";

export const routes: Route[] = [
    {
        path: ROUTES.HOME,
        name: "Login",
        component: Home,
        exact: true,
    },
];
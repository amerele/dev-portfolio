import type { PathRouteProps } from "react-router-dom";

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];

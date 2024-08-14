import type { PathRouteProps } from "react-router-dom";

import { Dashboard } from "../pages/home";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Dashboard />,
  }
];

export const privateRoutes: Array<PathRouteProps> = [];

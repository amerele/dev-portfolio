import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import UseAuth from "../components/auth/useAuth";

import { routes, privateRoutes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <UseAuth
                redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
              >
                {element}
              </UseAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Routings;

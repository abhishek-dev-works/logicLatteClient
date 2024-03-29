import * as React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps  {
  isAuthenticated: boolean;
  path: string;
  element: React.ReactNode;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  ...routeProps
}) => {
  if (isAuthenticated) {
    // If the user is authenticated, render the route normally
    return <Route {...routeProps} />;
  } else {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

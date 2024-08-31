import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthenticationPage from "../Pages/AuthenticationPage";
import HomePage from "../Pages/HomePage";
import LandingPage from "../Pages/LandingPage";
import JobsPage from "../Pages/JobsPage";
import JobDescription from "../Pages/JobDescription";
import FriendsPage from "../Pages/FriendsPage";
// import PrivateRoute from "./PrivateRoute";

const RoutesModlue = () => {
  const isAuthenticated = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <LandingPage>
                  <HomePage />
                </LandingPage>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          {/* <PrivateRoute
            path="/home"
            element={<HomePage />}
            redirectPath="/auth"
          /> */}
          <Route path="/auth" element={<AuthenticationPage />} />
          <Route
            path="/jobs"
            element={
              <LandingPage>
                <JobsPage />
              </LandingPage>
            }
          />
          <Route
            path="/jobs/:id"
            element={
              <LandingPage>
                <JobDescription />
              </LandingPage>
            }
          />
          <Route
            path="/friends"
            element={
              <LandingPage>
                <FriendsPage />
              </LandingPage>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesModlue;

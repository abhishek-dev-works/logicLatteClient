import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "../Pages/AuthenticationPage";
import HomePage from "../Pages/HomePage";
import PrivateRoute from "./PrivateRoute";

const RoutesModlue = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <PrivateRoute
            path="/home"
            element={<HomePage />}
            isAuthenticated={true}
            redirectPath="/auth"
          />
          <Route path="/auth" element={<AuthenticationPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesModlue;

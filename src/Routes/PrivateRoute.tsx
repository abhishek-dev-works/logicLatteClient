// // import * as React from "react";
// // import { Navigate, Route, RouteProps } from "react-router-dom";
// // import AuthenticationPage from "../Pages/AuthenticationPage";
// // import LandingPage from "../Pages/LandingPage";

// // interface PrivateRouteProps {
// //   path: string;
// //   element: React.ReactNode;
// //   redirectPath: string;
// // }

// // // const Layout = (props: { Component: any; [key: string]: any }) => {
// // //   const { Component, ...rest } = props;
// // //   return <LandingPage component={<Component {...rest} />} />;
// // // };

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...routeProps }) => {
//   const isAuthenticated = true; // Replace this with your own authentication logic
//   return (
//     <Route
//     path="/"
//     element={
//       isAuthenticated ? (
//         <LandingPage>
//           <HomePage />
//         </LandingPage>
//       ) : (
//         <Navigate to="/auth" />
//       )
//     }
//   />
//   );
// };

// export default PrivateRoute;

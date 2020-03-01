import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("its working");
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          console.log("Success");
          return <Component {...props} />;
        } else {
          console.log("Failed to login, redirecting");
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
export default PrivateRoute;

import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Loader from "react-js-loader";
import "./Loader.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const isLoggedIn = user?.email ? true : false;

  if (isLoading) {
    return (
      <div class="container">
        <div className="centered">
          <Loader
            type="bubble-top"
            bgColor={"#a76643"}
            color={"#a76643"}
            title={"Loading"}
            size={100}
          />
        </div>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;

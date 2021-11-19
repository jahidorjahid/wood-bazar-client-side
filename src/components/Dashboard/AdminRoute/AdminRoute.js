import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Loader from "react-js-loader";
import "./Loader.css";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  const isLoggedIn = user?.email ? true : false;
  console.log("admin is ", admin);

  if (isLoading) {
    return (
      <div className="container">
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
        isLoggedIn && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;

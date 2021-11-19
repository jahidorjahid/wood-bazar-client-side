import React from "react";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import MyOrders from "../Orders/Orders";
import Orders from "../Orders/Orders";
import Users from "../Users/Users";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout, admin } = useAuth();
  const { path, url } = useRouteMatch();
  console.log(admin);
  return (
    <div>
      <header className="db-header p-3 mb-3 border-bottom shadow">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {admin ? (
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/" className="nav-link px-2 link-secondary">
                    View Site
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/manage-orders`}
                    className="nav-link px-2 link-dark"
                  >
                    Manage Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/manage-users`}
                    className="nav-link px-2 link-dark"
                  >
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/manage-products`}
                    className="nav-link px-2 link-dark"
                  >
                    Manage Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/add-roduct`}
                    className="nav-link px-2 link-dark"
                  >
                    Add Product
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/" className="nav-link px-2 link-secondary">
                    View Site
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/myorders`}
                    className="nav-link px-2 link-dark"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/review`}
                    className="nav-link px-2 link-dark"
                  >
                    Review
                  </Link>
                </li>
              </ul>
            )}

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="dropdown text-end">
              <a
                href="/"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={logout}
                    to="/dashboard"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Content section start  */}
      <div className="section">
        <div className="container">
          {/* Nested route  */}
          {admin ? (
            <Switch>
              <AdminRoute exact path={path}>
                <Orders></Orders>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manage-orders`}>
                <Orders></Orders>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manage-users`}>
                <Users></Users>
              </AdminRoute>
            </Switch>
          ) : (
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/manage-orders`}>
                <Orders></Orders>
              </Route>
              <Route exact path={`${path}/manage-users`}>
                <Users></Users>
              </Route>
            </Switch>
          )}
          {/* nested route  */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

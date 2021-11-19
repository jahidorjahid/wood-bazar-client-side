// http://localhost:8000/api/orders

import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Dashboard/Table.css";
// sweetalert
import swal from "sweetalert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
toast.configure();

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://woodbazar.herokuapp.com/api/orders${user.email}`)
      .then((res) => setOrders(res.data.orders));
  }, [user.email]);

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-4">
                <h2 className="text-white">
                  Manage All <b>Orders</b>
                </h2>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.customerEmail}</td>
                  <td>{order.customerCounty}</td>
                  <td>{order.createdAt}</td>
                  <td>
                    {order.status === "pending" ? (
                      <span className="status text-danger">&bull;</span>
                    ) : (
                      <span className="status text-success">&bull;</span>
                    )}
                    {order.status}
                  </td>
                  <td>${order.productPrice}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>No</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Dashboard/Table.css";
// sweetalert
import swal from "sweetalert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // handle update order status
  const updateOrderStatus = (productId, status) => {
    swal({
      title: "Are you sure?",
      text: "You want to change Order status!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .put("https://woodbazar.herokuapp.com/api/orders", {
            _id: productId,
            status,
          })
          .then(() => {
            toast.success("Order status updated!");
            axios
              .get("https://woodbazar.herokuapp.com/api/orders")
              .then((res) => setOrders(res.data.orders));
          });
      }
    });
  };

  useEffect(() => {
    axios
      .get("https://woodbazar.herokuapp.com/api/orders")
      .then((res) => setOrders(res.data.orders));
  }, []);

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
                <th>Net Amount</th>
                <th>Action</th>
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
                  <td>
                    {order.status === "pending" ? (
                      <button
                        onClick={() => updateOrderStatus(order._id, "shipped")}
                        type="button"
                        className="btn bg-success btn-sm text-white"
                      >
                        confirm?
                      </button>
                    ) : (
                      <button
                        onClick={() => updateOrderStatus(order._id, "pending")}
                        type="button"
                        className="btn bg-danger btn-sm text-white"
                      >
                        cencel?
                      </button>
                    )}
                  </td>
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
                <th>Net Amount</th>
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

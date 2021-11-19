import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Dashboard/Table.css";
// sweetalert
import swal from "sweetalert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Users = () => {
  const [users, setUsers] = useState([]);

  // handle update user status
  const updateUserStatus = (userId, role) => {
    swal({
      title: "Are you sure?",
      text: "You want to change User role!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .put("https://woodbazar.herokuapp.com/api/users/role", {
            _id: userId,
            role,
          })
          .then(() => {
            toast.success("User status updated!");
            axios
              .get("https://woodbazar.herokuapp.com/api/users")
              .then((res) => setUsers(res.data.users));
          });
      }
    });
  };

  useEffect(() => {
    axios
      .get("https://woodbazar.herokuapp.com/api/users")
      .then((res) => setUsers(res.data.users));
  }, []);

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-4">
                <h2 className="text-white">
                  Manage All <b>Users</b>
                </h2>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Registered at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.createdAt}</td>

                  <td>
                    {user.role === "user" ? (
                      <button
                        onClick={() => updateUserStatus(user._id, "admin")}
                        type="button"
                        className="btn bg-success btn-sm text-white"
                      >
                        make admin?
                      </button>
                    ) : (
                      <button
                        onClick={() => updateUserStatus(user._id, "user")}
                        type="button"
                        className="btn bg-success btn-sm text-warning"
                      >
                        make user?
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Registered At</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

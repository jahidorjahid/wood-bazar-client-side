import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="main-content">
      <div className="container">
        <div className="login-card d-flex rounded-lg overflow-hidden bg-white">
          <div className="login-message d-none d-sm-none d-md-flex flex-column justify-content-center p-5">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657"
              alt="Welcome"
              className="img-fluid mb-3"
            />
          </div>
          <div className="login-body">
            <div className="login-body-wrapper mx-auto">
              <h3 className="text-center text-uppercase mb-3 form-title ">
                Signin WoodBazar
              </h3>
              <div className="form-group">
                <label for="email">Full Name</label>
                <input
                  type="name"
                  className="form-control form-control-lg"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder=""
                />
              </div>
              <button className="btn btn-main-2 btn-round-full my-4 btn-block btn-lg">
                Register
              </button>
              <p className="text-muted text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <div className="or-divider rounded-circle shadow d-flex justify-content-center align-items-center mx-auto mb-3">
                OR
              </div>
              <div className="d-flex justify-content-start">
                <div>
                  <button className="btn btn-facebook btn-block btn-md my-1">
                    Facebook
                  </button>
                </div>
                <div>
                  <button className="btn btn-google btn-block btn-md my-1">
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

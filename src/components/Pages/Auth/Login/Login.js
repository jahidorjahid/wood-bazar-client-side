import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { isLoading, loginUser, signInWithGoogle, authError } = useAuth();
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const history = useHistory();

  // handle login with email, password
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password, location, history);
    console.log("auth error ", authError);
  };

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
                Login WoodBazar
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control form-control"
                    placeholder="admin@admin.com"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control form-control"
                    placeholder="123456"
                    {...register("password", { required: true })}
                  />
                  <Link to="/forgot">Forgot password?</Link>
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-main-2 btn-round-full my-4 btn-block btn-lg"
                />
              </form>
              <p className="text-muted text-center">
                New to our platform? <Link to="/register">Register</Link>
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
                  <button
                    onClick={signInWithGoogle}
                    className="btn btn-google btn-block btn-md my-1"
                  >
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

export default Login;

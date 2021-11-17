import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login-bg">
          <div className="row">
            <div class="col-lg-7 col-md-12 col-sm-12">
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your email"
                />
                <div>
                  <input
                    class="btn btn-main btn-round-full"
                    name="submit"
                    type="submit"
                    value="Send Messege"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

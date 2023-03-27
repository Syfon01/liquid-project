import React from "react";
import "./auth.css"
import logo from "../../assets/images/my-img/logo.png"

const Login = () => {
  return (
    <div className="bg-login">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-10 col-lg-12 col-md-9 mx-auto">
            <div className="card o-hidden border-0 my-5 bg-transparent">
              <div className="card-body p-0">
                <div className="row d-flex justify-content-between align-items-center log-height">
                  <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-flex justify-content-between align-items-center log-height text-center">
                      <img
                        src={logo}
                        className="img-fluid"
                        alt=""
                        srcSet=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 bg-white">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          href="/dashboard"
                          className="btn btn-primary w-100 btn-block"
                        >
                          Login
                        </a>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
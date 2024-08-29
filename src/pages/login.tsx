import React from "react";
import logo from "../assets/img/logo1.png";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <section className="" style={{ backgroundColor: "#9A616D;" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-6">
              <div className="card" style={{borderRadius: "1rem;"}}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-body p-4 text-black d-flex flex-column justify-content-center">
                      <form>
                        <div className="d-flex align-items-center justify-content-center mb-3 pb-1">
                          <img src={logo} alt="" style={{ width: "120px" }} />
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3 text-center"
                          style={{ letterSpacing: "1px;" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="floatingInput">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-block bg-success w-100 text-white"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <p className="text-center">
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        </p>
                        
                        <p
                          className="mb-5 pb-lg-2 text-center"
                          style={{ color: "#393f81;" }}
                        >
                          Don't have an account? 
                          <Link to="/register" style={{ color: "#393f81;" }}>Register here</Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;

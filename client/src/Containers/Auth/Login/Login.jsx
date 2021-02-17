import React, { useState } from "react";
import "./Login.css";
export default function Login(props) {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    loading: false,
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  return (
    <div className="container auth-wrapper">
      <div className="col-md-8 mt-5 px-4 py-4">
        <form>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control auth-inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={authData.email}
              onChange={handleFormChange}
            />
            {/* {authErrors.email && <Alerts errorrMessage={authErrors.email} />} */}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control auth-inputs"
              id="exampleInputPassword1"
              name="password"
              value={authData.password}
              onChange={handleFormChange}
            />
            {/* {authErrors.password && (
              <Alerts errorrMessage={authErrors.password} />
            )} */}
          </div>

          <button type="submit" class="btn purple-btn">
            {authData.loading ? (
              <>
                <span className="mr-2">Loading...</span>
                <div
                  class="spinner-border text-white"
                  style={{ width: 20, height: 20 }}
                  role="status"
                />
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        <div className="d-flex flex-column mt-3">
          <span>Don't have an account?!</span>
          <a
            onClick={() => {
              props.history.push("/signup");
            }}
            className="register-btn"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

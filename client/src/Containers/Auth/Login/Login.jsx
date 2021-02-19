import React, { useState, useEffect } from "react";
import "./Login.css";
import { checkIsEmpty } from "../../../utils/authValidators";
import Alerts from "../../../components/Alerts";
import * as API from "../../../utils/api";
import { setAuthentication, isAuthenticated } from "../../../utils/auth";
import Header from "../../../components/Header";
export default function Login(props) {
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      props.history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      console.log("user");
      props.history.push("/dashboard");
    }
  }, [props.history]);
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    loading: false,
  });
  const [authErrors, setAuthErrors] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
    setAuthErrors({
      ...authErrors,
      email: "",
      password: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setAuthData({
      ...authData,
      loading: true,
    });
    if (!checkIsEmpty(authData.email)) {
      setAuthErrors({
        ...authErrors,
        email: "Email cannot be empty!",
      });
    }
    if (!checkIsEmpty(authData.password)) {
      setAuthErrors({
        ...authErrors,
        password: "Password cannot be empty!",
      });
    }
    const data = {
      email: authData.email,
      password: authData.password,
    };
    API.loginUser(data)
      .then((res) => {
        setAuthentication(res.data.token, res.data.user);
        if (isAuthenticated() && isAuthenticated().role === 1) {
          props.history.push("/admin/dashboard");
        } else {
          console.log("user");
          props.history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="container auth-wrapper">
        <div className="col-md-8 mt-5 px-4 py-4">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control auth-inputs"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={authData.email}
                onChange={handleFormChange}
              />
              {authErrors.email && <Alerts errorrMessage={authErrors.email} />}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control auth-inputs"
                id="exampleInputPassword1"
                name="password"
                value={authData.password}
                onChange={handleFormChange}
              />
              {authErrors.password && (
                <Alerts errorrMessage={authErrors.password} />
              )}
            </div>

            <button type="submit" className="btn purple-btn" onClick={onSubmit}>
              {authData.loading ? (
                <>
                  <span className="mr-2">Loading...</span>
                  <div
                    className="spinner-border text-white"
                    style={{ width: 20, height: 20 }}
                    role="status"
                  />
                </>
              ) : (
                "Login"
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
    </>
  );
}

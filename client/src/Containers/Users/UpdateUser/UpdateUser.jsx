import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";

export default function UpdateUser(props) {
  const {
    history: {
      location: {
        state: { data },
      },
    },
  } = props;

  return (
    <>
      <div className="header-bar">
        <ArrowLeft
          className="back-btn"
          onClick={() => props.history.goBack()}
        />
        <h4 className="nav-title">Update User</h4>
      </div>
      <div className="content">
        <div className="inner-content">
          <form>
            <div className="container">
              <div className="row">
                <div className="col-md-6 sm-12 xs-12">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control auth-inputs"
                      value={data.username}
                    />
                  </div>
                </div>
                <div className="col-md-6 sm-12 xs-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="productDescription"
                      className="form-control auth-inputs"
                      value={data.email}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={data.role}
                      className="form-control auth-inputs"
                    >
                      <option value={data.role}>
                        {data.role === 1 ? "Admin" : "User"}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                {/* <button className="btn purple-btn" onClick={onSubmit}>
                {loading ? (
                  <>
                    <span className="mr-2">Loading...</span>
                    <div
                      class="spinner-border text-white"
                      style={{ width: 20, height: 20 }}
                      role="status"
                    />
                  </>
                ) : (
                  "Create"
                )}
              </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

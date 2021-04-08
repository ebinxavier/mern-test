import React, { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/actions/userActions";
import { useSelector } from "react-redux";
export default function UpdateUser(props) {
  const dispatch = useDispatch();
  const {
    history: {
      location: {
        state: { data },
      },
    },
  } = props;
  const [updateUserData, setUpdateUser] = useState(data);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    return () => {};
  }, [updateUserData]);

  const onSubmit = (e) => {
    e.preventDefault();
    const id = updateUserData._id;
    const data = {
      username: updateUserData.username,
      email: updateUserData.email,
      role: updateUserData.role,
    };
    dispatch(updateUser(id, data));
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({
      ...updateUserData,
      [name]: value,
    });
    console.log(value);
    console.log(name, "nm");
  };
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
                      name="username"
                      className="form-control auth-inputs"
                      value={updateUserData.username}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 sm-12 xs-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control auth-inputs"
                      value={updateUserData.email}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                  <div className="form-group">
                    <label>Role</label>
                    <select name="role" className="form-control auth-inputs">
                      <option value={data.role}>
                        {data.role === 1 ? "Admin" : "User"}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <button className="btn purple-btn" onClick={onSubmit}>
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
                    "Update"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

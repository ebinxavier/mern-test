import React from "react";
import Sidebar from "../../components/Sidebar";
import { isAuthenticated, logout } from "../../utils/auth";
import { useHistory } from "react-router-dom";

export default function User() {
  const history = useHistory();
  const handleLogout = () => {
    logout(() => {
      history.push("/");
    });
  };
  return (
    <div className="row" style={{ width: "100%" }}>
      <Sidebar />
      <div className="col-md-9">
        <div className="d-flex justify-content-end mt-1">
          <button className="btn purple-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

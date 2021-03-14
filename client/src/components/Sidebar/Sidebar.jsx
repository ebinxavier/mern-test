import React from "react";
import "./Sidebar.css";
import { isAuthenticated, logout } from "../../utils/auth";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <div style={{ padding: 20 }} className="d-flex text-white">
          <div className="avatar-circle">
            <span className="initials">
              {isAuthenticated() &&
                isAuthenticated().username.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="ml-1 mt-2">
            {isAuthenticated() && isAuthenticated().email}
          </span>
        </div>
        <ul className="sidebar-container">
          {isAuthenticated() && isAuthenticated().role === 0 && (
            <>
              <li>
                <NavLink to="#">Dashboard</NavLink>
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().role === 1 && (
            <>
              <li>
                <NavLink to="/admin/dashboard" activeClassName="sidebar-active">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="sidebar-active" to="/admin/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Add Food</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="sidebar-active"
                  to="/admin/category/create"
                  className="text-white"
                >
                  Create Category
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-white">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/users"
                  activeClassName="sidebar-active"
                  className="text-white"
                >
                  Users
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* <div className="col-md-9">
        <div className="d-flex justify-content-end mt-1">
          <button className="btn purple-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div> */}
    </div>
  );
}

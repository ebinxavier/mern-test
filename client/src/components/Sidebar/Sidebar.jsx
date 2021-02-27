import React from "react";
import "./Sidebar.css";
import { isAuthenticated, logout } from "../../utils/auth";
import { useHistory } from "react-router-dom";
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
                <a>Dashboard</a>
              </li>
            </>
          )}
          {isAuthenticated() && isAuthenticated().role === 1 && (
            <>
              <li>
                <a href="/admin/dashboard" className="sidebar-active">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/admin/products/create">Products</a>
              </li>
              <li>
                <a href="#">Add Food</a>
              </li>
              <li>
                <a href="/admin/category/create" className="text-white">
                  Create Category
                </a>
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

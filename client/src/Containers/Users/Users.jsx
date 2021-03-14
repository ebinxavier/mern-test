import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import Sidebar from "components/Sidebar";
import { useSelector } from "react-redux";
import "./Users.css";
export default function Users() {
  const { users } = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);

  return (
    <div className="d-flex w-100">
      <div className="row w-100">
        <Sidebar />
        <div className="col-md-9">
          <div className="container mt-4">
            <div class="search">
              {" "}
              <input
                type="text"
                class="search-input"
                placeholder="Search..."
                name=""
              />{" "}
              <a href="#" class="search-icon">
                {" "}
                <Search style={{ fontSize: 18 }} />
              </a>{" "}
            </div>

            <div className="row table-header">
              <div className="col-md-3">
                <h4 className="table-title">Username</h4>
              </div>
              <div className="col-md-3">
                <h4 className="table-title">Email</h4>
              </div>
              <div className="col-md-3">
                <h4 className="table-title">Role</h4>
              </div>
              <div className="col-md-3">
                <h4 className="table-title">Actions</h4>
              </div>
            </div>
            {users.length > 0
              ? users.map((user, index) => (
                  <div className="row table-container" key={index}>
                    <div className="col-md-3">{user.username}</div>
                    <div className="col-md-3">{user.email}</div>
                    <div className="col-md-3">action tb here</div>
                    <div className="col-md-3">
                      {user.role === 1 ? "Admin" : "User"}
                    </div>
                  </div>
                ))
              : "No Users..!"}
          </div>
        </div>
      </div>
    </div>
  );
}

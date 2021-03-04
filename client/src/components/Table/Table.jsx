import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import "./Table.css";

export default function Table() {
  const { users } = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  useEffect(() => {});
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <div className="container mt-4">
      <div className="row table-header">
        <div className="col-md-4">
          <h4 className="table-title">Username</h4>
        </div>
        <div className="col-md-4">
          <h4 className="table-title">Email</h4>
        </div>
        <div className="col-md-4">
          <h4 className="table-title">Role</h4>
        </div>
      </div>
      {loading ? (
        <Skeleton count={users.length} />
      ) : users.length > 0 ? (
        users.map((user, index) => (
          <div className="row table-container" key={index}>
            <div className="col-md-4">{user.username}</div>
            <div className="col-md-4">{user.email}</div>
            <div className="col-md-4">{user.role === 1 ? "Admin" : "User"}</div>
          </div>
        ))
      ) : (
        "No Users..!"
      )}
    </div>
  );
}

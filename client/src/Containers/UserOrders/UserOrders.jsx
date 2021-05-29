import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

export default function UserOrders() {
  return (
    <div className="row w-100">
      <Sidebar />
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-3">
            {" "}
            <h4 className="table-title">Order1</h4>
          </div>
          <div className="col-md-3">
            <h4 className="table-title">Order2</h4>
          </div>
          <div className="col-md-3">
            <h4 className="table-title">Order3</h4>
          </div>
          <div className="col-md-3">
            <h4 className="table-title">Order4</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

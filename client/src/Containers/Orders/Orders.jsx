import React from "react";
import Sidebar from "components/Sidebar";
import FavoriteOrders from "components/Orders/FavoriteOrders";
export default function Orders() {
  return (
    <div className="row" style={{ width: "100%" }}>
      <Sidebar />
      <div className="col-md-9">
        <FavoriteOrders />
      </div>
    </div>
  );
}

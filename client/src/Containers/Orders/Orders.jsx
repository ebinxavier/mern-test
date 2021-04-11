import React from "react";
import Sidebar from "components/Sidebar";
import FavoriteOrders from "components/Orders/FavoriteOrders";
import OrderTable from "components/Orders/OrderTable";
export default function Orders() {
  return (
    <div className="row" style={{ width: "100%" }}>
      <Sidebar />
      <div className="col-md-9">
        <FavoriteOrders />
        <OrderTable />
      </div>
    </div>
  );
}
